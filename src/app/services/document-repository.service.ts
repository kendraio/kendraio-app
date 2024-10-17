import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { v4 as UUIDv4 } from 'uuid';
import { SchemaRepositoryService } from './schema-repository.service';
import { map, switchMap } from 'rxjs/operators';
import { at, get, has, omit } from 'lodash-es';
import Dexie from 'dexie';

declare const emit;

@Injectable({
  providedIn: 'root',
})
export class DocumentRepositoryService extends Dexie {
  constructor(private readonly schemaRepo: SchemaRepositoryService) {
    super('kendraio-legacy');
  }

  async resetApp() {
    await this.delete();
    await this.init();
  }

  // Initialise the database
  // and create the `by_label` index if it doesn't exist
  async init() {
    // this.db = new PouchDB('kendraio');
    // return this.db.createIndex({ index: { fields: [ '@label' ]}})
    //   .then(() => this.db.get('_design/kendraio_docs').catch(() => ({ _rev: null })))
    //   .then(({ _rev }) => !_rev ? this.db.put({
    //     _id: '_design/kendraio_docs',
    //     _rev,
    //     views: {
    //       by_label: {
    //         map: function (doc) { emit(doc['@label']); }.toString()
    //       }
    //     } as any
    //   }) : {});
    this.version(1).stores({
      docs: '&id,label',
    });
    await this.open();
  }

  listAll() {
    // return from(this.db.query('kendraio_docs/by_label'));
    return of({ rows: [] });
  }

  listAllOfType(type) {
    console.log(`List of type ${type}`);
    return of([]);

    // return from(this.db.allDocs({
    //   include_docs: true,
    //   attachments: true,
    //   startkey: type,
    //   endkey: `${type}\ufff0`
    // })).pipe(
    //   map(({ rows }) => rows.map(({ doc }) => doc)),
    // );
  }

  addNew(schemaName: string, initialValues = {}): Observable<any> {
    return this.putDoc({ '@schema': schemaName, ...initialValues });
  }

  // When fetching document, also fetch attachments and add to doc as per schema
  getDoc(id) {
    return from([]);

    // return from(this.db.get(id, { attachments: true, binary: true }).then(doc => {
    //   const { attachments } = this.schemaRepo.getSchema(doc['@schema']);
    //   return (attachments || []).reduce((a, v) => {
    //     if (doc['_attachments'] && doc['_attachments'][v]) {
    //       a[v] = doc['_attachments'][v]['data'];
    //     }
    //     return a;
    //   }, {
    //     ...omit(doc, ['_attachments'])
    //   });
    // }));
  }

  // When saving a document, remove attachments (as per schema) and store separately
  putDoc(doc) {
    return from([]);
    // const { labelField, attachments } = this.schemaRepo.getSchema(doc['@schema']);
    // return from(this.db.put({
    //   _id: get(doc, '_id', `${doc['@schema']}:${UUIDv4()}`),
    //   ...omit(doc, attachments),
    //   '@label': doc[labelField]
    // }).then((r) => {
    //   return Promise.all((attachments || []).map(key => {
    //     if (doc && doc[key]) {
    //       const docId = doc._id;
    //       const attachmentId = key;
    //       const attachmentData = doc[key];
    //       const type = (attachmentData as Blob).type;
    //       return this.db.putAttachment(docId, attachmentId, r.rev, attachmentData, type);
    //     }
    //   })).then(() => r);
    // }));
  }

  deleteDoc(id) {
    return this.getDoc(id).pipe(
      switchMap((doc) => this.putDoc({ ...doc, _deleted: true }))
    );
  }
}
