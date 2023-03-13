import { Component, OnInit } from '@angular/core';
import {AdaptersService} from '../../services/adapters.service';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import {map, switchMap, tap} from 'rxjs/operators';
import {has, pickBy} from 'lodash-es';
import {forkJoin} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-swagger-form-select-dialog',
  templateUrl: './swagger-form-select-dialog.component.html',
  styleUrls: ['./swagger-form-select-dialog.component.scss']
})
export class SwaggerFormSelectDialogComponent implements OnInit {

  adapters$;
  selectedAdapter;
  selectedForm;

  _swaggers = {};

  constructor(
    private readonly http: HttpClient,
    private readonly adapters: AdaptersService,
    public dialogRef: MatDialogRef<SwaggerFormSelectDialogComponent>
  ) { }

  ngOnInit() {
    this.adapters$ = this.adapters.adapters$
      .pipe(
        // tap(console.log),
        map((adapters) => {
          return pickBy(adapters, config => has(config, 'adapter.swagger'));
        }),
        map((adapters) => {
          return Object.keys(adapters)
            .map(adapterName => ({ adapterName, swagger: adapters[adapterName]['adapter'].swagger }));
        }),
        switchMap(adapters => {
          return forkJoin(adapters.map(({ adapterName, swagger }) =>
            this.http.get(`${environment.adapterBaseUrl}${swagger}`).pipe(map(result => ({ adapterName, result })))));
        }),
        map(adapters => adapters.reduce((a, { adapterName, result }) => {
          a[adapterName] = result;
          return a;
        }, {})),
        // tap(console.log),
        tap(s => this._swaggers = s)
      );
  }

  loadForm() {
    const definitions = this._swaggers[this.selectedAdapter]['definitions'];
    this.dialogRef.close({ ...definitions[this.selectedForm], definitions });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
