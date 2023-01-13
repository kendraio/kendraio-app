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
    window['databaseInit'] = true;
  }

  configureDefaultSettings() {
    localStorage.setItem('core.variables.adapterRepos', JSON.stringify({ repos: [
      'https://kendraio-adapter.kendraio.vercel.app/'
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

  /**
   * Add a single item to the database. 
   * If a uuid is provided, the add will fail if the uuid already exists.
   * @param itemObject {object} - the item to add, including the adapterName and schemaName.  T
   *                              
   * @returns a promise that resolves to the uuid of the item
   */
  add({adapterName, schema: schemaName, data}) {
    const uuid =  _get(data, 'uuid', v4());
    const label = _get(data, '_label', _get(data, 'name'));
    return this['metadata'].add({uuid, adapterName, schemaName, data, label});
  }

  /**
   * Load the content of a local datset (schema+adapter). 
   * 
   * @param dataset {object} - the dataset to load, including the adapterName and schemaName.  
   * @returns dataset content as an array of objects
   */
  get({adapterName, schema: schemaName}) {
    return this['metadata']
      .where({adapterName, schemaName})
      .toArray()
      .then(items => items.map(({uuid, data}) => ({uuid, ...data})));
  }

  /**
   * Update an item in the database. 
   * @param item {object} - the item to update, including the uuid
   * @returns a promise that resolves to the number of updated items (0 or 1)
   */
  update({data, uuid}) {
    const label = _get(data, '_label', _get(data, 'name'));
    return this['metadata'].update(uuid, { data, label });
  }

  /**
   * Load a specific item from the database.
   * @param uuid {string} - the uuid of the item to load   
   * @returns A promise that resolves to the item
   */
  fetch({ uuid }) {
    return this['metadata']
      .where({ uuid })
      .toArray()
      .then(items => items.map(({ data }) => ({ uuid, ...data })));
  }

  /**
   * Delete an item from the database.
   * @param uuid {string} - the uuid of the item to delete
   * @returns an undefined promise
   */
    
  deleteItem({ uuid }) {
    console.log('delete', uuid);
    return this['metadata'].delete(uuid);
  }

  /**
   * Export the entire metadata table as JSON
   * @returns a promise that resolves to the JSON string
   */
  exportMetadataTable() {
    return this['metadata'].toArray().then(items => JSON.stringify(items));
  }

  /**
   * Imports the entire metadata table from a JSON object array, overwriting the existing table
   * @param items {string} - the JSON object array to import
   * @returns a promise that resolves to the number of items imported
   */
  importMetadataTable(items) {
    return this['metadata'].clear().then(_ => this['metadata'].bulkAdd(items));
  }
}
