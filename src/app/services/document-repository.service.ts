import { Injectable } from '@angular/core';
import { from, Observable } from "rxjs";
import PouchDB from 'pouchdb';
import Find from 'pouchdb-find';
import { v4 as UUIDv4 } from 'uuid';
import { SchemaRepositoryService } from "./schema-repository.service";
import { switchMap } from "rxjs/operators";
import { at, omit } from 'lodash-es';

declare const emit;

@Injectable({
  providedIn: 'root'
})
export class DocumentRepositoryService {

  db: PouchDB.Database;

  constructor(
    private readonly schemaRepo: SchemaRepositoryService,
  ) {
  }

  init() {
    PouchDB.plugin(Find);
    this.db = new PouchDB('kendraio');
    return this.db.createIndex({ index: { fields: [ "@label" ]}})
      .then(() => this.db.get('_design/kendraio_docs').catch(() => ({ _rev: null })))
      .then(({ _rev }) => !_rev ? this.db.put({
        _id: '_design/kendraio_docs',
        _rev,
        views: {
          by_label: {
            map: function (doc) { emit(doc["@label"]); }.toString()
          }
        } as any
      }) : {});
  }

  listAll() {
    return from(this.db.query('kendraio_docs/by_label'));
  }

  addNew(schemaName: string): Observable<PouchDB.Core.Response> {
    const _id = `${schemaName}:${UUIDv4()}`;
    return this.putDoc({ _id, "@schema": schemaName });
  }

  getDoc(id) {
    return from(this.db.get(id, { attachments: true, binary: true }).then(doc => {
      const { attachments } = this.schemaRepo.getSchema(doc["@schema"]);
      return (attachments || []).reduce((a, v) => {
        if (doc['_attachments'] && doc['_attachments'][v]) {
          a[v] = doc['_attachments'][v]['data'];
        }
        return a;
      }, {
        ...omit(doc, ['_attachments'])
      });
    }));
  }

  putDoc(doc) {
    const { labelField, attachments } = this.schemaRepo.getSchema(doc["@schema"]);
    return from(this.db.put({
      ...omit(doc, attachments),
      "@label": doc[labelField]
    }).then((r) => {
      return Promise.all((attachments || []).map(key => {
        if (doc && doc[key]) {
          const docId = doc._id;
          const attachmentId = key;
          const attachmentData = doc[key];
          const type = (attachmentData as Blob).type;
          return this.db.putAttachment(docId, attachmentId, r.rev, attachmentData, type);
        }
      })).then(() => r);
    }));
  }

  deleteDoc(id) {
    return this.getDoc(id).pipe(
      switchMap(doc => this.putDoc({ ...doc, _deleted: true }))
    );
  }
}
