import { Injectable } from '@angular/core';
import {MENUITEMS as PROTOTYPE_MENU} from '../_shared/components/menu/menu.component';
import {AppSettingsService} from './app-settings.service';
import {BehaviorSubject} from 'rxjs';
import {LocalDatabaseService} from './local-database.service';

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  _menu = new BehaviorSubject([]);
  menuItems$ = this._menu.asObservable();

  constructor(
    private readonly settings: AppSettingsService,
    private readonly db: LocalDatabaseService
  ) { }

  getMenu() {
    const services = [];

    return [
      {
        path: '/dashboard',
        label: 'dashboard' ,
        icon: 'dashboard',
      },
      ...(services.length === 0) ? [] : [{
        label: 'Services',
        icon: 'live_tv',
        path: '/services',
        children: services
      }],
      ...this.settings.get('disablePreview', false) ? [] : PROTOTYPE_MENU,
      {
        path: '/core/settings',
        label: 'settings',
        icon: 'settings'
      },
      {
        path: '/core/adapters',
        label: 'Adapters',
        icon: 'extension'
      },
      {
        path: '/workflow-builder',
        label: 'Workflow builder',
        icon: 'build'
      },
      {
        path: '/form-builder',
        label: 'Form builder',
        icon: 'build'
      }
    ];
  }
}
