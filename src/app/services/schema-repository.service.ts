import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { safeLoad as YamlLoad } from 'js-yaml';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchemaRepositoryService {
  schemas = {};

  constructor(private readonly http: HttpClient) {}

  init() {
    const enabledSchemas = [
      'schema_Person',
      'schema_Photo',
      'mrin_Project',
      'schema_Audio',
      'kendraio_Clip',
      'kendraio_file',
      'kendraio_music-recording',
      'kendraio_music-release',
      'kendraio_music-work',
      'kendraio_payment',
      'kendraio_claim',
      'kendraio_video',
      'kendraio_person',
      'bloomen_Photo',
      'bloomen_User',
    ];
    return forkJoin(
      enabledSchemas.map((schemaName) =>
        this.http
          .get(`assets/schemas/${schemaName}.yaml`, { responseType: 'text' })
          .pipe(
            map((text) => YamlLoad(text)),
            tap((schema) => (this.schemas[schemaName] = schema))
          )
      )
    ).toPromise();
  }

  getSchemaList() {
    return Object.keys(this.schemas).filter((key) => !this.schemas[key].hidden);
  }

  getSchema(name: string) {
    return this.schemas[name];
  }

  getLabelFieldForSchema(schemaName: string) {
    const schema = this.getSchema(schemaName);
    const { labelField } = this.getSchema(schemaName);
    return schema.fields.find(({ id }) => id === labelField);
  }
}
