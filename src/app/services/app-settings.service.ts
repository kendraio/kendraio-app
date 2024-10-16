import { Injectable } from "@angular/core";
import { has } from "lodash-es";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppSettingsService {
  settings = {};
  settingsUpdated$ = new Subject();

  constructor() {}

  init() {
    return new Promise<void>((resolve, _) => {
      const settings = localStorage.getItem("core.variables.settings");
      if (settings) {
        this.settings = JSON.parse(settings);
      }
      resolve();
    });
  }

  get(name, defaultValue = null) {
    // TODO: Variable get/set from workflows needs to be cache aware, else this needs
    //  to re-cache data on every access as may have changed in a workflow
    const settings = localStorage.getItem("core.variables.settings");
    if (settings) {
      this.settings = JSON.parse(settings);
    }
    if (!has(this.settings, name)) {
      return defaultValue;
    }
    return this.settings[name];
  }

  getTmp(name, defaultValue) {
    // Hi Darren this is temp workaround so i can set default value
    if (this.settings[name] === undefined) {
      return defaultValue;
    }
    return this.settings[name];
  }

  set(name, value) {
    this.settings[name] = value;
    localStorage.setItem(
      "core.variables.settings",
      JSON.stringify(this.settings),
    );
    this.settingsUpdated$.next();
  }
}
