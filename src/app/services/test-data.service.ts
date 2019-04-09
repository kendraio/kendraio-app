import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {DocumentRepositoryService} from './document-repository.service';
import {SchemaRepositoryService} from './schema-repository.service';

// Service for communicating with the Kendraio Test API
// The data is pulled from a Google Spreadsheet via an API proxy.
// For more details see this repo:
// https://github.com/kendraio/google-sheets-api-proxy

const KENDRAIO_API = 'https://google-sheets-api-proxy.now.sh/';

const isKendraioSchema = item => item.startsWith('kendraio_');
const removePrefix = item => item.split('_')[1];

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(
    private readonly http: HttpClient,
    private readonly docs: DocumentRepositoryService,
    private readonly schemas: SchemaRepositoryService
  ) { }

  // Get the list of valid entity types
  listEntityTypes($config = { live: false }) {
    if ($config.live) {
      return this.http.get(KENDRAIO_API);
    }
    return this.schemas.getSchemaList().filter(isKendraioSchema).map(removePrefix);
  }

  listEntities(type: string, $config = { live: false }) {
    if ($config.live) {
      return this.http.get(`${KENDRAIO_API}${type}`);
    }
    return this.docs.listAll().pipe(
      map(({ rows }) =>
        rows
          .filter(({ id }) => id.startsWith(`kendraio_${type}`))
          .map(removePrefix)
      )
    );
  }

  listAll(type: string, $config = { live: false }) {
    if ($config.live) {
      return this.http.get<{ header: Array<any>, data: Array<any> }>(`${KENDRAIO_API}${type}/all`).pipe(
        map(({ header, data }) => {
          return data.map(row => {
            return header.reduce((obj, key, i) => {
              obj[key] = row[i];
              return obj;
            }, {});
          });
        })
      );
    }
    return this.docs.listAllOfType(`kendraio_${type}`);
  }

  getEntity(type: string, id: number, $config = { live: false }) {
    if ($config.live) {
      return this.http.get(`${KENDRAIO_API}${type}/${id}`);
    }
    return this.docs.getDoc(id);
  }
}
