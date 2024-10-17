import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { HttpClient } from '@angular/common/http';
import { AdaptersService } from '../../services/adapters.service';
import { map, tap } from 'rxjs/operators';
import { get, has, pickBy } from 'lodash-es';
import { forkJoin } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-adapter-query-select-dialog',
  templateUrl: './adapter-query-select-dialog.component.html',
  styleUrls: ['./adapter-query-select-dialog.component.scss'],
})
export class AdapterQuerySelectDialogComponent implements OnInit {
  adapters$;
  selectedAdapter;
  selectedQuery;

  adapterCache;
  queries = [];

  constructor(
    private readonly adapters: AdaptersService,
    private readonly http: HttpClient,
    public dialogRef: MatDialogRef<AdapterQuerySelectDialogComponent>
  ) {}

  ngOnInit() {
    this.adapters$ = this.adapters.adapters$.pipe(
      map((adapters) => {
        return pickBy(adapters, (config) => has(config, 'adapter.queries'));
      }),
      tap((value) => (this.adapterCache = value))
    );
  }

  adapterChange() {
    forkJoin(
      get(this.adapterCache, `${this.selectedAdapter}.adapter.queries`, []).map(
        (path) => this.http.get(`${environment.adapterBaseUrl}${path}`)
      )
    ).subscribe((results) => (this.queries = results));
  }

  loadForm() {
    this.dialogRef.close(this.queries[this.selectedQuery]);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
