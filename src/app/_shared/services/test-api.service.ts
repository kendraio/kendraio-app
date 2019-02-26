import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

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
    private readonly http: HttpClient
  ) { }

  // Get the list of valid entity types
  listEntityTypes() {
    return this.http.get(KENDRAIO_API);
  }

  listEntities(type: string) {
    return this.http.get(`${KENDRAIO_API}${type}`);
  }

  listAll(type: string) {
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

  getEntity(type: string, id: number) {
    return this.http.get(`${KENDRAIO_API}${type}/${id}`);
  }
}