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
    const baseSchema = (!!this.schemaGetter)
      ? mappingUtility({ context: this.context, data: this.model }, this.schemaGetter)
      : this.schema;

    const schemaDefinitions = {};
    schemaDefinitions[baseSchema] = await this.resolveSchema(schemaDefinitions, baseSchema);
    const jsonSchema = {
      definitions: schemaDefinitions,
      '$ref': `#/definitions/${baseSchema}`
    };
    // TODO: some fields may need uiSchema (eg widget overrides)
    this.output.emit({ jsonSchema, uiSchema: {} });
  }

  /**
   * Returns a schemdefinitions object for the given embedded schema
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
   * Converts a schema dataset to a json schema. Recursively calls itself to resolve embedded schemas. 
   * @param schemaDefinitions 
   * @param inputSchema 
   * @param inputSchemaName 
   * @returns {object} Json schema
   */
  async mapSchema(schemaDefinitions, inputSchema, inputSchemaName) {
    const outputSchema = {
      title: get(inputSchema, 'name', ''),
      description: get(inputSchema, 'description', ''),
      type: 'object',
      properties: {},
    };

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
          // TODO: use reference widget to link to data items
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
          const embedSchemaName = get(p, 'config', '');
          if (!has(schemaDefinitions, embedSchemaName) && embedSchemaName !== inputSchemaName) {
            schemaDefinitions[embedSchemaName] = await this.resolveSchema(schemaDefinitions, embedSchemaName);
          }
          outputSchema.properties[get(p, 'key', '')] = {
            '$ref': `#/definitions/${embedSchemaName}`
          };
          break;
        }
        case 'List': {
          const embedSchemaName = get(p, 'config', '');
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
