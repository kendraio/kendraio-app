import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {v4} from 'uuid';
import { get as _get } from 'lodash-es';
import {installCoreWorkflows} from './core-workflows/install-core';

@Injectable({
  providedIn: 'root'
})
export class LocalDatabaseService extends Dexie {

  constructor() {
    super('kendraio-db');
    this.initDatabase();
    this.on('populate', () => {
      console.log('Populate database');
      installCoreWorkflows(this);
    });
  }

  initDatabase() {
    this.version(1).stores({
      metadata: 'uuid, schemaName, adapterName, [adapterName+schemaName]',
      adapters: 'adapterName',
      dashboards: 'adapterName',
      services: 'adapterName',
      schemas: '++, *adapterName, [adapterName+schemaName]',
      forms: '++, *adapterName, [adapterName+formId]',
      workflows: '++, *adapterName, [adapterName+workflowId]',
      apis: '++, *adapterName, [adapterName+apiPath]'
    });
  }

  resetApp() {
    // Delete, initialise, then re-open database
    this.delete().then(_ => {
      this.initDatabase();
      this.open();
    });
  }

  add({adapterName, schema: schemaName, data}) {
    const uuid =  _get(data, 'uuid', v4());
    return this['metadata'].add({uuid, adapterName, schemaName, data});
  }

  get({adapterName, schema: schemaName, idField}) {
    return this['metadata']
      .where({adapterName, schemaName})
      .toArray()
      .then(items => items.map(({uuid, data}) => ({uuid, ...data})));
  }
  update({data, uuid}) {
    return this['metadata'].update(uuid, { data });
  }

  fetch({ uuid }) {
    return this['metadata']
      .where({ uuid })
      .toArray()
      .then(items => items.map(({ data }) => ({ uuid, ...data })));
  }

  deleteItem({ uuid }) {
    return this['metadata'].delete(uuid);
  }
}
