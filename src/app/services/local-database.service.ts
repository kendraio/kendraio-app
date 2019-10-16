import {Injectable} from '@angular/core';
import Dexie from 'dexie';
import {v4} from 'uuid';
import { get as _get } from 'lodash-es';

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
    const uuid =  _get(data, 'uuid', v4());
    return this['metadata'].add({uuid, adapterName, schema, data});
  }

  get({adapterName, schema, idField}) {
    return this['metadata']
      .where({adapterName, schema})
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
