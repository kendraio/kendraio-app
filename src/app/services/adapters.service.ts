import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {get} from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class AdaptersService {

  adapterKeys = [];
  adapters$ = new BehaviorSubject({});
  enabledAdapters = {};
  _adapters;

  adaptersReady$ = new BehaviorSubject(false);

  constructor(
    private readonly http: HttpClient
  ) {
    const savedState = localStorage.getItem('kendraio-adapter-state');
    if (savedState) {
      this.enabledAdapters = JSON.parse(savedState);
    }
    this.http.get(environment.adapterConfig)
      .pipe(
        tap(adapters => {
          this.adapterKeys = Object.keys(adapters);
        })
      )
      .subscribe(adapters => {
        // console.log(adapters);
        this._adapters = adapters;
        this.adapters$.next(adapters);
        this.adaptersReady$.next(true);
      });
  }

  getAdaptersInfo() {
    return Object.keys(this._adapters || {}).reduce((a, key) => {
      a[key] = this._adapters[key];
      a[key]['enabled'] = get(this.enabledAdapters, key, false);
      return a;
    }, {});
  }

  getAdapterSync(id) {
    return get(this._adapters, id, {});
  }

  getAdapter(id) {
    return this.adapters$.pipe(
      map(allAdapters => get(allAdapters, `${id}.adapter`)),
      // tap(console.log)
    );
  }

  resetApp() {
    this.enabledAdapters = {};
    this.saveState();
  }

  enableAll() {
    this.adapterKeys.forEach(key => {
      this.enableAdapter(key);
    });
  }

  saveState() {
    localStorage.setItem('kendraio-adapter-state', JSON.stringify(this.enabledAdapters));
  }

  enableAdapter(adapter: string) {
    this.enabledAdapters[adapter] = true;
    this.saveState();
  }
  disableAdapter(adapter: string) {
    this.enabledAdapters[adapter] = false;
    this.saveState();
  }
}
