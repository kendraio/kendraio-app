import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  settings = {};

  constructor() { }

  init() {
    return new Promise((resolve, _) => {
      const settings = localStorage.getItem('kendraio-app-settings');
      if (settings) {
        this.settings = JSON.parse(settings);
      }
      resolve();
    });
  }

  get(name, defaultValue = null) {
    if (!this.settings[name]) {
      return defaultValue;
    }
    return this.settings[name];
  }

  set(name, value) {
    this.settings[name] = value;
    localStorage.setItem('kendraio-app-settings', JSON.stringify(this.settings));
  }
}
