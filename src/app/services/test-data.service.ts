import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {DocumentRepositoryService} from './document-repository.service';
import {SchemaRepositoryService} from './schema-repository.service';
import { includes } from 'lodash';

// Service for communicating with the Kendraio Test API
// The data is pulled from a Google Spreadsheet via an API proxy.
// For more details see this repo:
// https://github.com/kendraio/google-sheets-api-proxy

const KENDRAIO_API = 'https://google-sheets-api-proxy.now.sh/';

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
    return this.schemas.getSchemaList();
  }

  listEntities(type: string, $config = { live: false }) {
    if ($config.live) {
      return this.http.get(`${KENDRAIO_API}${type}`);
    }
    return this.docs.listAll().pipe(
      map(({ rows }) => rows.filter(({ id }) => id.startsWith(type)))
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
    return this.docs.listAllOfType(type);
  }

  getEntityCounts() {
    return this.docs.listAll().pipe(
      map(({ rows }) => rows.reduce((acc, item) => {
        const namedType = item['id'].split(':')[0];
        const type = includes(namedType, '_') ? namedType.split('_')[1] : namedType;
        acc[type] = acc[type] ? acc[type] + 1 : 1;
        return acc;
      }, {})),
    );
  }

  getEntity(type: string, id: number, $config = { live: false }) {
    if ($config.live) {
      return this.http.get(`${KENDRAIO_API}${type}/${id}`);
    }
    return this.docs.getDoc(id);
  }
}
