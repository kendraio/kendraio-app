import { Injectable } from '@angular/core';
import {MENU_ITEMS as PROTOTYPE_MENU} from '../_shared/components/menu/menu.component';
import {AppSettingsService} from './app-settings.service';
import {BehaviorSubject} from 'rxjs';
import {LocalDatabaseService} from './local-database.service';
import {find, get} from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class MenuBuilderService {

  _menu = new BehaviorSubject([]);
  menuItems$ = this._menu.asObservable();

  constructor(
    private readonly settings: AppSettingsService,
    private readonly db: LocalDatabaseService
  ) {
    this.updateServicesMenu();
    this.settings.settingsUpdated$.subscribe(() => {
      this.updateServicesMenu();
    });
  }

  async updateServicesMenu() {
    const dashboards = await this.db['dashboards'].toArray();
    const services = await this.db['services'].toArray();
    const menuItems = dashboards.map(item => {
      const adapterName = get(item, 'adapterName', 'UNKNOWN');
      const label = get(item, 'label', adapterName);
      const icon = get(item, 'icon', 'brightness_5');
      const workflowId = get(item, 'workflowId', 'dashboard');
      const childrenServices = find(services, service => service.adapterName === adapterName);
      return {
        path: `${adapterName}/${workflowId}`,
        label,
        icon,
        children: get(childrenServices, 'services', []).map(s => {
          return {
            path: `${adapterName}/${s.workflowId}`,
            label: s.label || s.workflowId,
            icon: s.icon || 'file_copy'
          };
        })
      };
    });
    this._menu.next(this.getMenu(menuItems));
  }

  getMenu(services = []) {
    return [
      {
        path: '/dashboard',
        label: 'dashboard' ,
        icon: 'dashboard',
      },
      ...(services.length === 0) ? [] : [{
        label: 'services',
        icon: 'live_tv',
        path: '/services',
        children: services
      }],
      ...this.settings.get('disablePreview', true) ? [] : PROTOTYPE_MENU,
      {
        path: '/core/settings',
        label: 'settings',
        icon: 'settings'
      },
      {
        path: '/core/adapters',
        label: 'adapters',
        icon: 'extension'
      },
      {
        path: '/workflowCloud/listWorkflows',
        label: 'workflowCloud.menuTitle',
        icon: 'cloud'
      },
      {
        path: '/workflow-builder',
        label: 'wfBuilder',
        icon: 'build'
      },
      {
        path: '/form-builder',
        label: 'formBuilder.menuTitle',
        icon: 'build'
      },
      {
        path: '/query',
        label: 'queryBuilder.menuTitle',
        icon: 'build'
      }
    ];
  }
}
