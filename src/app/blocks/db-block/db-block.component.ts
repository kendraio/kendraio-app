import { Component, OnInit } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get, isString, isUndefined} from 'lodash-es';
import {LocalDatabaseService} from '../../services/local-database.service';
import {search} from 'jmespath';

@Component({
  selector: 'app-db-block',
  templateUrl: './db-block.component.html',
  styleUrls: ['./db-block.component.scss']
})
export class DbBlockComponent extends BaseBlockComponent {

  hasError = false;
  errorMessage = '';
  isLoading = false;

  operation = 'none';
  adapterName = 'UNKNOWN';
  schema = 'none';
  idField = 'uuid';
  skipFirst = true;
  uuidGetter;

  constructor(
    private readonly localDatabase: LocalDatabaseService
  ) {
    super();
  }


  onConfigUpdate(config: any) {
    this.adapterName = get(config, 'adapterName', 'UNKNOWN');
    this.schema = get(config, 'schema', 'none');
    this.operation = get(config, 'operation', 'none');
    this.idField = get(config, 'idField', 'uuid');
    this.skipFirst = get(config, 'skipFirst', true);
    this.uuidGetter = get(config, 'uuidGetter');
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange && this.skipFirst) {
      return;
    }

    if (isUndefined(data)) {
      return;
    }

    switch (this.operation) {
      case 'fetch': {
        if (isString(this.uuidGetter)) {
          const uuid = search({ data: this.model, context: this.context }, this.uuidGetter);
          if (isString(uuid)) {
            this.localDatabase.fetch({ uuid }).then(result => this.output.emit(result));
          }
        }
        // TODO: Error
        return;
      }
      case  'delete': {
        if (isString(this.uuidGetter)) {
          const uuid = search({ data: this.model, context: this.context }, this.uuidGetter);
          if (isString(uuid)) {
            this.localDatabase.deleteItem({ uuid }).then(result => this.output.emit(result));
          }
        }
        // TODO: Error
        return;
      }
      case 'add': {
        this.localDatabase.add({
          adapterName: this.adapterName,
          schema: this.schema,
          data
        }).then(result => this.output.emit(result));
        return;
      }
      case 'get': {
        this.localDatabase.get({
          adapterName: this.adapterName,
          schema: this.schema,
          idField: this.idField,
        }).then(result => this.output.emit(result));
        return;
      }
      default:
        console.log(`Unknown or unsupported database operation ${this.operation}`);
    }
  }
}
