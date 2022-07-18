import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { get, has, clone } from 'lodash-es';
import { mappingUtility } from '../mapping-block/mapping-util';
import { LocalDatabaseService } from '../../services/local-database.service';
import { validate as isValidUUID } from 'uuid';

@Component({
  selector: 'app-load-schema-block',
  templateUrl: './load-schema-block.component.html',
  styleUrls: ['./load-schema-block.component.scss']
})
export class LoadSchemaBlockComponent extends BaseBlockComponent {

  isLoading = false;
  adapterName = 'schemas';
  schema = '';
  schemaGetter = '';

  constructor(
    private readonly localDatabase: LocalDatabaseService
  ) {
    super();
  }

  onConfigUpdate(config: any) {
    window['localDatabase'] = this.localDatabase;
    this.adapterName = get(config, 'adapterName', 'schemas');
    this.schema = get(config, 'schema', '');
    this.schemaGetter = get(config, 'schemaGetter', '');
  }

  async onData(data: any, firstChange: boolean) {
    // schemaGetter config can reference the location of a "schema", which we turn into a JSON schema, if defined. 
    // If not, we use the schema config value.
    const baseSchema = (!!this.schemaGetter)
      ? mappingUtility({ context: this.context, data: this.model }, this.schemaGetter)
      : this.schema;

    if ((typeof baseSchema === 'string') && (baseSchema.length > 0)) {
      let schemaDefinitions = {};
      schemaDefinitions[baseSchema] = await this.resolveSchema(schemaDefinitions, baseSchema, 0);
      const jsonSchema = {
        definitions: schemaDefinitions,
        '$ref': `#/definitions/${baseSchema}`
      };
      // TODO: some fields may need uiSchema (eg widget overrides)
      this.output.emit({ jsonSchema, uiSchema: {} });
    }
  }

  /**
   * Returns a schemaDefinitions object for the given embedded schema
   * @param schemaDefinitions 
   * @param schemaName 
   * @returns 
   */
  async resolveSchema(schemaDefinitions, schemaName, depth) {
    if (!has(schemaDefinitions, schemaName)) {
      try {
        const result = await this.loadSchemaFromDatabase(schemaName);
        schemaDefinitions[schemaName] = await this.mapSchema(schemaDefinitions, get(result, '[0].data', {}), schemaName, depth);
      } catch (e) {
        // TODO: handle error
        console.log('error loading schema:', e);
      } finally {
        this.isLoading = false;
      }
    }
    return schemaDefinitions[schemaName];
  }

  async loadSchemaFromDatabase(schemaName: string) {
    return await this.localDatabase['metadata'].where({ 'label': schemaName }).toArray();
  }

  async loadRecords(embedSchemaName: string) {
    console.log('loading records for schema:', embedSchemaName);
    return await this.localDatabase['metadata'].where({ 'schemaName': embedSchemaName }).toArray();
  }
  /**
   * Converts a schema dataset to a JSON schema. Recursively calls itself to resolve embedded schemas.
   * 
   * The schemaDefinitions object is used to store the embedded schemas.
   * List or Object items that have schemas specified are resolved as needed,
   * they are added to the definitions, and are then referenced
   * 
   * @param schemaDefinitions 
   * @param inputSchema 
   * @param inputSchemaName 
   * @returns {object} Json schema
   */
  async mapSchema(schemaDefinitions, inputSchema, inputSchemaName, depth) {
    // Create the base schema object
    let outputSchema = {
      title: get(inputSchema, 'name', ''),
      description: get(inputSchema, 'description', ''),
      type: 'object',
      properties: {},
    };

    // Loop through the properties of the schema, and add them to the output schema
    for (const p of get(inputSchema, 'properties', [])) {
      switch (get(p, 'type')) {
        case 'Number': {
          outputSchema = await this.mapSchemaNumber(outputSchema, p);
          break;
        }
        case 'Text': {
          outputSchema = await this.mapSchemaText(outputSchema, p);
          break;
        }
        case 'Date': {
          outputSchema = await this.mapSchemaDate(outputSchema, p);
          break;
        }
        case 'Object': {
          outputSchema = await this.mapSchemaObject(outputSchema, p, schemaDefinitions, inputSchemaName, depth);
          break;
        }
        case 'List': {
          outputSchema = await this.mapSchemaList(outputSchema, p, schemaDefinitions, inputSchemaName, depth);
          break;
        }
        case 'ObjectReference': {
          outputSchema = await this.mapSchemaObjectReference(outputSchema, p, schemaDefinitions, inputSchemaName, depth);
          break;
        }
        case 'ListReference': {
          outputSchema = await this.mapSchemaListReference(outputSchema, p, schemaDefinitions, inputSchemaName, depth);
          break;
        }
      }
    }

    return outputSchema;
  }

  private async mapSchemaNumber(outputSchema, p) {
    outputSchema.properties[get(p, 'key', '')] = {
      type: 'number',
      title: get(p, 'title', ''),
      description: get(p, 'description', ''),
    };
    return outputSchema;
  }

  private async mapSchemaText(outputSchema, p) {
    // Text type turns into a JSON schema string
    // if config is set to a schema name, it can populate an 
    // enumerated list of record labels from the database
    let textValue = {
      type: 'string',
      title: get(p, 'title', ''),
      description: get(p, 'description', ''),
    };


    if (get(p, 'config', false)) {
      // Config may provide a UUID or a schemaName for now.
      if (!isValidUUID(get(p, 'config', ''))) {
        // if config is not a UUID, assume it is a schemaName:
        let results = await this.loadSchemaFromDatabase(get(p, 'config', ''));
        // e.g: [{
        //      "label": "bob"
        //    }, {
        //      "label": "dave"
        //    }]

        // Just make an array of the names from the label property:
        results = results.map(r => get(r, 'label', ''));
        // e.g: ["bob", "dave"]
        textValue['enum'] = results;
      } else {
        console.error("UUID not yet supported for config");
      }
    }
    outputSchema.properties[get(p, 'key', '')] = textValue;
    return outputSchema;
  }

  private async mapSchemaDate(outputSchema, p) {
    // Date type turns into a JSON schema string of type date
    outputSchema.properties[get(p, 'key', '')] = {
      type: 'string',
      format: 'date',
      title: get(p, 'title', ''),
      description: get(p, 'description', ''),
    };
    return outputSchema;
  }

  private async mapSchemaObject(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
    // Object type turns into a JSON schema object, with a reference to the embedded schema
    // Loads referenced schema if not already found.
    // It does not load data from the database, it just defines a schema definition.
    //
    // Example input:
    // {
    //   "type": "Object",
    //   "key": "person",
    //   "title": "Person",
    //   "config": "person"
    // }
    // The config value is the name of the embedded schema
    const embedSchemaName = get(p, 'config', '');
    // If the embedded schema has not been resolved, resolve it:
    if (!has(schemaDefinitions, embedSchemaName) && embedSchemaName !== inputSchemaName) {
      schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1);
    }
    outputSchema.properties[get(p, 'key', '')] = {
      '$ref': `#/definitions/${embedSchemaName}`
    };
    return outputSchema;
  }

  private async mapSchemaList(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
    // List type turns into a JSON schema array, with a reference to the embedded schema
    // Loads the referenced schema if not already found.
    // It does not load data from the database, it just defines a 
    // schema definition made of multiple object schemas.
    //
    // Example input:
    // {
    //   "type": "List",
    //   "key": "people",
    //   "title": "People",
    //   "config": "person"
    // }
    // The config value is the name of the embedded schema
    const embedSchemaName = get(p, 'config', '');
    // If the embedded schema has not been resolved, resolve it:
    if (!has(schemaDefinitions, embedSchemaName) && embedSchemaName !== inputSchemaName) {
      schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1);
    }
    outputSchema.properties[get(p, 'key', '')] = {
      type: 'array',
      title: get(p, 'title', ''),
      description: get(p, 'description', ''),
      'items': {
        '$ref': `#/definitions/${embedSchemaName}`
      }
    };
    return outputSchema;
  }

  private async mapSchemaObjectReference(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
    // ObjectReference type injects a single record from the database into the schema,
    // with the default value set to the record's data.
    // This form property is an object type that conforms to a schema,
    // with a list of possible values for the object to be populated from the metadata records
    // for the schema specified in the config.
    const embedSchemaName = get(p, 'config', '');
    // If the embedded schema has not been resolved, resolve it:
    if (!has(schemaDefinitions, embedSchemaName) && embedSchemaName !== inputSchemaName) {
      schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1);
    }
    // Gets the records array for this schema:
    const records = await this.loadRecords(embedSchemaName);
    // Generate the schema for this reference
    let injectedRecord = {
      type: 'object',
      title: get(p, 'title', ''),
      oneOf: records.map(record => {
        let item = {
          title: record.label,
          properties: {}
        };

        // we add the uuid property to the item properties
        // when editing existing saved data,
        // we use a regex pattern to validate that record matches any provided data object
        // since the uuid is unique, we can use it to identify the record as a match
        item.properties['uuid'] = {
          type: 'string',
          readOnly: true,
          default: record.uuid,
          pattern: "^" + record.uuid + "$"
        };

        for (const property in record.data) {
          if (record.data.hasOwnProperty(property)) {
            const value = record.data[property];
            item.properties[property] = clone(get(schemaDefinitions[embedSchemaName], `properties.${property}`, {}));
            item.properties[property].readOnly = true;
            item.properties[property].default = clone(value);
            // we get the type property from the schema at schemaDefinitions[embedSchemaName]
          }
        }
        return item;
      })
    };
    outputSchema.properties[get(p, 'key', '')] = injectedRecord;
    return outputSchema;
  }

  private async mapSchemaListReference(outputSchema, p, schemaDefinitions, inputSchemaName, depth) {
    // ListReference type injects multiple records from the 
    // database into the schema, for selection from a list.
    //
    // This form property is a list of objects that confirm to a schema,
    // with a list of possible values for the objects to be populated 
    // from the metadata records for the schema specified in the config.
    // The user can add as many new referenced record objects as they want.
    // If a schema reference list is nested in another schema reference list,
    // then a plain object is used for the nested list item, rather than
    // a list of selectable objects.
    const embedSchemaName = get(p, 'config', '');

    // If the embedded schema has not been resolved, resolve it:
    if (!has(schemaDefinitions, embedSchemaName) && embedSchemaName !== inputSchemaName) {
      schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName, depth + 1);
    }

    // Gets the records array for this schema:
    const records = await this.loadRecords(embedSchemaName);

    const rawSchema = await this.loadSchemaFromDatabase(embedSchemaName);
    // if rawSchema is empty, then the schema has not been loaded yet and we should return
    if (rawSchema.length === 0) {
      return outputSchema;
    }

    // The label may be missing, so we find which property is the label key on the rawSchema:
    const labelKey = 'data.' + get(rawSchema, '[0].data.label', 'Missing label');

    // Then we get the label property from each record's properties
    if (depth == 0) {
      let injectedRecordSelectionList = {
        type: 'object',
        oneOf: records.map(record => {
          let item = {
            title: get(record, labelKey, 'fallback:' + record.label || 'Missing label!'),
            properties: {}
          };

          const title = item.title;
          console.log("Title 156 origin data:", { title, labelKey, record, rawSchema });

          // we add the uuid property to the item properties
          // when editing an existing and non-nested record,
          // we use a regex pattern to validate that record matches any provided data object
          // since the uuid is unique, we can use it to identify the record as a match
          item.properties['uuid'] = {
            type: 'string',
            readOnly: true,
            default: record.uuid,
            pattern: "^" + record.uuid + "$"
          };

          for (const property in record.data) {
            if (record.data.hasOwnProperty(property)) {
              const value = record.data[property];

              item.properties[property] = clone(get(schemaDefinitions[embedSchemaName], `properties.${property}`, {}));
              item.properties[property].readOnly = true;
              item.properties[property].default = clone(value);

              // If we have an object with a UUID, we add a pattern to validate that the UUID is correct
              if (property === 'uuid') {
                item.properties[property].pattern = "^" + value + "$";
                console.log("Adding pattern: " + item.properties[property].pattern);
              }

              // if the property type is string, add a pattern for it:
              if (item.properties[property].type === 'string') {
                item.properties[property].pattern = "^" + value + "$";
                console.log("Adding pattern: " + item.properties[property].pattern + " to " + property + " of " + embedSchemaName + "." + record.label);
              }

            }
          }

          item.properties['uuid'].default = record.uuid;

          return item;
        })
      };

      outputSchema.properties[get(p, 'key', '')] = {
        type: 'array',
        title: get(p, 'title', ''),
        description: get(p, 'description', ''),
        items: injectedRecordSelectionList,
      };

    } else {

      // if we have a nested record - a record that is referenced by another record,
      // instead of injecting a selectable list of records, we inject a single record,
      // with an array of one record object that conforms to the schema, with the uuid property added

      const plain_schema = get(schemaDefinitions[embedSchemaName], 'properties', {});
      let schema_with_uuid = clone(plain_schema);

      // Since the UUID is part of every schema, it is not a configurable property in our custom
      // schema editor, so we add it here.
      schema_with_uuid['uuid'] = {
        type: 'string',
        readOnly: true,
        title: "UUID"
      }

      outputSchema.properties[get(p, 'key', '')] = {
        type: 'array',
        title: get(p, 'title', ''),
        description: get(p, 'description', ''),
        items: {
          type: 'object',
          properties: schema_with_uuid
        }
      };

    }

    return outputSchema;

  }
}
