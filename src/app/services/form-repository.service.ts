import { Injectable } from '@angular/core';
import { SchemaRepositoryService } from './schema-repository.service';
import { HttpClient } from '@angular/common/http';
import { safeLoad as YamlLoad } from 'js-yaml';
import {catchError, map, tap} from 'rxjs/operators';
import {DynamicFormService} from '@ng-dynamic-forms/core';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormRepositoryService {

  constructor(
    private readonly schemas: SchemaRepositoryService,
    private readonly http: HttpClient,
    private readonly formService: DynamicFormService
  ) { }

  getFormModel(schemaName, formName) {
    const schema = this.schemas.getSchema(schemaName);
    if (!schema || !schema['forms']) {
      return from([]);
    }
    return this.http.get(schema.forms[formName], {responseType: 'text'}).pipe(
      map(text => YamlLoad(text)),
      tap(console.log),
      map(config => this.formService.fromJSON(config)),
      catchError(err => from([]))
    );
  }
}
