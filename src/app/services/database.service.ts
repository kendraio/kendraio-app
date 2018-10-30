import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db = {};

  constructor() {
    const data = localStorage.getItem('kendraio-db-snapshot');
    if (data) {
      this.db = JSON.parse(data);
    }
  }

  resetApp() {
    this.db = {};
    this.saveState();
  }

  listKeys() {
    return Object.keys(this.db);
  }

  save(item) {
    if (!item['id']) {
      item['id'] = v4();
    }
    this.db[item['id']] = item;
    this.saveState();
    return from([item]);
  }

  get(id: string) {
    return from([this.db[id]]);
  }

  delete(id: string) {
    delete this.db[id];
    this.saveState();
    return from([true]);
  }

  saveState() {
    localStorage.setItem('kendraio-db-snapshot', JSON.stringify(this.db));
  }
}
