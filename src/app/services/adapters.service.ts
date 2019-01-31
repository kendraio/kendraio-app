import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdaptersService {

  adapterKeys = [];
  adapters$ = new BehaviorSubject({});
  enabledAdapters = {};

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
        console.log(adapters);
        this.adapters$.next(adapters);
      });
  }

  getAdapter(id) {
    return this.adapters$.pipe(
      tap(console.log)
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
