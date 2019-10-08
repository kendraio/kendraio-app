import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {v4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class LocalDatabaseService extends Dexie {

  constructor() {
    super('kendraio-db');
    this.version(1).stores({
      metadata: '&uuid, schema, adapterName, [adapterName+schema]',
    });
  }

  add({adapterName, schema, data}) {
    const uuid = v4();
    return this['metadata'].add({uuid, adapterName, schema, data});
  }

  get({adapterName, schema, idField}) {
    return this['metadata']
      .where({adapterName, schema})
      .toArray()
      .then(items => items.map(({uuid, data}) => ({uuid, ...data})));
  }
}
