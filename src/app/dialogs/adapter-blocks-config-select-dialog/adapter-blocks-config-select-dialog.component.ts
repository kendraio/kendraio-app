import { Component, OnInit } from '@angular/core';
import {AdaptersService} from '../../services/adapters.service';
import {HttpClient} from '@angular/common/http';
import {MatDialogRef } from '@angular/material/dialog';
import {map, tap} from 'rxjs/operators';
import {get, has, pickBy} from 'lodash-es';
import {forkJoin} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-adapter-blocks-config-select-dialog',
  templateUrl: './adapter-blocks-config-select-dialog.component.html',
  styleUrls: ['./adapter-blocks-config-select-dialog.component.scss']
})
export class AdapterBlocksConfigSelectDialogComponent implements OnInit {

  adapters$;
  selectedAdapter;
  selectedConfig;

  adapterCache;
  configs = [];

  constructor(
    private readonly adapters: AdaptersService,
    private readonly http: HttpClient,
    public dialogRef: MatDialogRef<AdapterBlocksConfigSelectDialogComponent>
  ) { }

  ngOnInit() {
    this.adapters$ = this.adapters.adapters$
      .pipe(
        map((adapters) => {
          return pickBy(adapters, config => has(config, 'adapter.configs'));
        }),
        tap(value => this.adapterCache = value)
      );
  }

  adapterChange() {
    forkJoin(get(this.adapterCache, `${this.selectedAdapter}.adapter.configs`, [])
      .map(path => this.http.get(`${environment.adapterBaseUrl}${path}`)))
      .subscribe(results => this.configs = results);
  }

  loadConfig() {
    this.dialogRef.close({ adapterName: this.selectedAdapter, ...this.configs[this.selectedConfig] });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
