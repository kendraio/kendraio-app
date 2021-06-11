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
      this.configureDefaultSettings();
    });
  }

  configureDefaultSettings() {
    localStorage.setItem('core.variables.adapterRepos', JSON.stringify({ repos: [
      'https://kendraio-adapter.kendraio.now.sh/'
    ]}));
  }

  initDatabase() {
    this.version(1).stores({
      metadata: 'uuid, schemaName, adapterName, label, [adapterName+schemaName]',
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
    const label = _get(data, '_label', _get(data, 'name'));
    return this['metadata'].add({uuid, adapterName, schemaName, data, label});
  }

  get({adapterName, schema: schemaName, idField}) {
    return this['metadata']
      .where({adapterName, schemaName})
      .toArray()
      .then(items => items.map(({uuid, data}) => ({uuid, ...data})));
  }
  update({data, uuid}) {
    const label = _get(data, '_label', _get(data, 'name'));
    return this['metadata'].update(uuid, { data, label });
  }

  fetch({ uuid }) {
    return this['metadata']
      .where({ uuid })
      .toArray()
      .then(items => items.map(({ data }) => ({ uuid, ...data })));
  }

  deleteItem({ uuid }) {
    console.log('delete', uuid);
    return this['metadata'].delete(uuid);
  }
}
