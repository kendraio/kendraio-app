import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { get, has, clone } from 'lodash-es';
import { mappingUtility } from '../mapping-block/mapping-util';
import { LocalDatabaseService } from '../../services/local-database.service';
import { validate as isValidUUID } from 'uuid';
import { v4 as uuidv4 } from 'uuid';




function convertTemplateToSchema(template, config) {
  // config should contain an object with two keys: blockTypeDefaults, and convertables
  let blockTypeDefaults = get(config, 'blockTypeDefaults', {});
  // e.g:
  `{
    "c5bfac02-f0b6-4c31-8fdf-18de02667ee9": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "default": "Image",
          "readOnly": true,
          "title": "Image"
        },
        "src": {
          "type": "string",
          "title": "Image URL"
        }
      }
    }
  }`
  // We convert these defined object keys:
  let convertables = get(config, 'convertables', {});
  // e.g:
  `{
    "websitemodel": "website-content"
  }`

  function convertKeys(object) {
    var newObject = clone(object);
    for (var key in object) {
      if (convertables[key]) {
        newObject[convertables[key]] = convertKeys(object[key]);
        delete newObject[key];
      } else {
        if (typeof object[key] === "object") { // Recurse into objects, but not arrays.  Arrays are handled below.  This is a little hacky, but it works for now.  We could also check the type of the value at each level and handle it accordingly.  
          newObject[key] = convertKeys(object[key]); // Recurse into objects, but not arrays.  Arrays are handled below.  
        }
        // now we handle arrays:
        if (Array.isArray(object[key])) {
          newObject[key] = []; // Create a new array to hold the converted objects.  
          for (var i = 0; i < object[key].length; i++) { // Loop through the original array of objects.  
            var convertedObject = convertKeys(object[key][i]); // Recursively convert each object in the array, and store it in a variable.  
            newObject[key].push(convertedObject); // Push the converted object into the new array.  
          }
        }
      }
    }

    return newObject; // Return a copy of the original object with all keys converted.  
  }

  function applyBlockTypeDefaults(object) {
    // We need to recursively loop through the object and apply blockTypeDefaults to each block-content key. 
    // This means that when we find an object with a UUID matching an expected key, we replace it's contents entirely with a copy of the defaults.
    var newObject = clone(object); // Make a copy of the original object.  
    // first we get the UUID keys of the blockTypeDefaults, then we recurse for matches, changing parents where found.  
    var blockTypeDefaultKeys = Object.keys(blockTypeDefaults); // Get the keys of the blockTypeDefaults object.  These are UUIDs, and we will use them to match against our template's UUIDs.  
    for (var key in object) { // Loop through each key in the original object:
      if (typeof object[key] === "object") { // If it is an array or an object, recurse into it: 
        newObject[key] = applyBlockTypeDefaults(object[key]); // Recursively call this function on any objects found within this one, replacing them with their converted versions as they are returned from recursion.  

        if (Array.isArray(newObject[key]) && newObject["block-content"]) {// If we have a block-content array that contains objects with uuids matching those of our defaults...  This is a little hacky because I'm not sure how to handle arrays at each level without checking for specific keys like this... but it works for now! :)

          var tempArray = [];
          for (var i = 0; i < newObject[key].length; i++) { // Loop through the array of objects.  
            if (blockTypeDefaultKeys.indexOf(newObject[key][i]["uuid"]) > -1) { // If we find a UUID that matches one of our defaults... 
              tempArray.push(clone(blockTypeDefaults[newObject[key][i]["uuid"]])); // Push a copy of the default object into our temporary array, replacing it's contents entirely with those from blockTypeDefaults.  
              tempArray[tempArray.length - 1]["uuid"] = uuidv4(); // Add a new UUID v4 property to each item.  
            } else {
              tempArray.push(newObject[key][i]);// Otherwise just push the original object into our temporary array as is, without modification or replacement by defaults: 

            }

          }

          newObject["block-content"] = tempArray;// Replace this key's value with an entirely new version containing only converted objects and no originals: 

        }
      }
    };

    return newObject; // Return a copy of the original object with all keys converted and replaced by their default values where applicable!
  }

  function arrayOfUUIDsToDict(object) {
    function arrayChildrenAllHaveUUIDs(array) {
      for (var i = 0; i < array.length; i++) {
        if (!array[i]["uuid"]) return false; // If any child object does not have a UUID, we return false and do nothing to this array.  
      }

      return true; // Otherwise we can assume that all children of the array have UUIDs, so it is safe to convert them into an object with those keys!

    }

    var newObject = clone(object); // Make a copy of the original object.  
    for (var key in newObject) {// Loop through each key in the original object:        
      if (typeof newObject[key] === "object") { // If it is an array or an object, recurse into it: 
        newObject[key] = arrayOfUUIDsToDict(newObject[key]); // Recursively call this function on any objects found within this one, replacing them with their converted versions as they are returned from recursion.  

        if (Array.isArray(newObject[key]) && arrayChildrenAllHaveUUIDs(newObject[key])) {
          var tempObj = {};
          for (var i = 0; i < newObject[key].length; i++) { // Loop through the original child objects in the original parent object's key value:  
            tempObj[newObject[key][i]["uuid"]] = newObject[key][i]; // Add each child object to a temporary object, using the UUID as the key.  
            delete tempObj[newObject[key][i]["uuid"]].uuid; // Delete the UUID from each child object once it is used as a key instead.  
          }

          newObject[key] = tempObj; // Replace the original parent object's key value with our temporary object containing all of the child objects, now using their UUIDs as keys.  
        }
      }
    };

    return newObject; // Return a copy of the original object with all arrays converted to objects where applicable!
  }


  function convertToValidJSONSchema(template) {
    let schema = {
      "type": "object",
      "properties": {}
    }
    for (let key in template) {
      if (typeof template[key] === "object") {
        // Only modify invalid JSON schema fragments
        if (template[key].type === undefined) {
          schema.properties[key] = convertToValidJSONSchema(template[key])
        } else {
          schema.properties[key] = template[key]
        }
      } else {
        schema.properties[key] = {
          "type": "string",
          "default": template[key],
          "readOnly": true,
          "title": template[key]
        }
      }
    }
    return schema
  }
  console.log("returning test")
  //return blockTypeDefaults["c5bfac02-f0b6-4c31-8fdf-18de02667ee9"];
  return convertToValidJSONSchema(arrayOfUUIDsToDict(applyBlockTypeDefaults(convertKeys(template))))
}



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
  lastOutput = {};

  templateToSchema = {};

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
    this.templateToSchema = get(config, 'templateToSchema', '');
  }

  async onData(data: any, firstChange: boolean) {

    if (this.templateToSchema) {
      const jsonSchema = convertTemplateToSchema(data, this.templateToSchema);
      //this.lastOutput = jsonSchema;
      this.lastOutput = {
        "jsonSchema": jsonSchema, "uiSchema": {}
      };
      this.output.emit(this.lastOutput);
      console.log('Emitting new templateToSchema schema:', JSON.stringify(this.lastOutput, null, 2));
      return;
    }
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
      this.lastOutput = { jsonSchema, uiSchema: {} };
      this.output.emit(this.lastOutput);
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
    const schema = await this.localDatabase['metadata'].where({ 'label': schemaName }).toArray();
    return schema;
  }

  async loadRecords(embedSchemaName: string) {
    const records = await this.localDatabase['metadata'].where({ 'schemaName': embedSchemaName }).toArray();
    return records;
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
              }

              // if the property type is string, add a pattern for it:
              if (item.properties[property].type === 'string') {
                item.properties[property].pattern = "^" + value + "$";
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
