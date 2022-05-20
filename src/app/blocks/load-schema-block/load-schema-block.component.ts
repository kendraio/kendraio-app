import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get, has} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';
import {LocalDatabaseService} from '../../services/local-database.service';

@Component({
  selector: 'app-load-schema-block',
  templateUrl: './load-schema-block.component.html',
  styleUrls: ['./load-schema-block.component.scss']
})
export class LoadSchemaBlockComponent  extends BaseBlockComponent {

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

    const schemaDefinitions = {};
    // Resolve the schema and its embedded schemas
    schemaDefinitions[baseSchema] = await this.resolveSchema(schemaDefinitions, baseSchema);
    // Create the JSON schema object
    const jsonSchema = {
      definitions: schemaDefinitions,
      '$ref': `#/definitions/${baseSchema}`
    };
    // TODO: some fields may need uiSchema (eg widget overrides),
    // but for now, we just return an empty uiSchema object.
    this.output.emit({ jsonSchema, uiSchema: {} });
  }

  /**
   * Returns a schemaDefinitions object for the given embedded schema
   * @param schemaDefinitions 
   * @param schemaName 
   * @returns 
   */
  async resolveSchema(schemaDefinitions, schemaName) {
    if (!has(schemaDefinitions, schemaName)) {
      try {
        const result = await this.localDatabase['metadata'].where({ 'label': schemaName }).toArray();
        schemaDefinitions[schemaName] = await this.mapSchema(schemaDefinitions, get(result, '[0].data', {}), schemaName);
      } catch (e) {
        // TODO: handle error
        console.log('error loading schema:', e);
      } finally {
        this.isLoading = false;
      }
    }
    return schemaDefinitions[schemaName];
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
  async mapSchema(schemaDefinitions, inputSchema, inputSchemaName) {
    // Create the base schema object
    const outputSchema = {
      title: get(inputSchema, 'name', ''),
      description: get(inputSchema, 'description', ''),
      type: 'object',
      properties: {},
    };
    // Loop through the properties of the schema, and add them to the output schema

    for (const p of get(inputSchema, 'properties', [])) {
      switch (get(p, 'type')) {
        case 'Text': {
          outputSchema.properties[get(p, 'key', '')] = {
            type: 'string',
            title: get(p, 'title', ''),
            description: get(p, 'description', ''),
          };
          break;
        }
        case 'Number': {
          outputSchema.properties[get(p, 'key', '')] = {
            type: 'number',
            title: get(p, 'title', ''),
            description: get(p, 'description', ''),
          };
          break;
        }
        case 'Date': {
          outputSchema.properties[get(p, 'key', '')] = {
            type: 'string',
            format: 'date',
            title: get(p, 'title', ''),
            description: get(p, 'description', ''),
          };
          break;
        }
        case 'Reference': {
          // TODO: not fully implemented.
          // You might use a reference widget to link to data items,
          // See https://app.kendra.io/culturebanked/editWork
          // Or a mapping that can splice in values using the 'set' method
          outputSchema.properties[get(p, 'key', '')] = {
            type: 'array',
            items: {
              type: 'string',
              title: [get(p, 'title', ''), 'ID'].join(' '),
              description: get(p, 'description', ''),
            }
          };
          break;
        }
        case 'Object': {
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
            schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName);
          }
          outputSchema.properties[get(p, 'key', '')] = {
            '$ref': `#/definitions/${embedSchemaName}`
          };
          break;
        }
        case 'List': {
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
            schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName);
          }
          outputSchema.properties[get(p, 'key', '')] = {
            type: 'array',
            title: get(p, 'title', ''),
            description: get(p, 'description', ''),
            'items': {
              '$ref': `#/definitions/${embedSchemaName}`
            }
          };
          break;
        }
      }
    }

    return outputSchema;
  }

}
