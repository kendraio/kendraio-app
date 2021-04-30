import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
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

    try {
      const result = await this.localDatabase['metadata']
        .where({ 'label': baseSchema })
        .toArray();
      this.isLoading = false;
      const jsonSchema = await this.mapSchema(get(result, '[0].data', {}));
      this.output.emit({ jsonSchema, uiSchema: {} });
    } catch (e) {
      // TODO: handle error
      console.log('error loading schema:', e);
    } finally {
      this.isLoading = false;
    }
  }

  async mapSchema(inputSchema) {
    const outputSchema = {
      title: get(inputSchema, 'name', ''),
      description: get(inputSchema, 'description', ''),
      type: 'object',
      properties: {},
    };
    get(inputSchema, 'properties', []).forEach(p => {
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
            type: 'string',
            title: [get(p, 'title', ''), 'ID'].join(' '),
            description: get(p, 'description', ''),
          };
          break;
        }
        case 'Object': {
          // TODO: load schema and embed
          break;
        }
        case 'List': {
          // TODO: load schema and embed as list
          break;
        }
      }
    });

    return outputSchema;
  }

}
