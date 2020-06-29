import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocsListPageComponent} from './pages/docs-list-page/docs-list-page.component';
import {UploadPageComponent} from './pages/upload-page/upload-page.component';
import {AdaptersPageComponent} from './pages/adapters-page/adapters-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {AuthCallbackComponent} from './pages/auth-callback/auth-callback.component';
import {DropboxPageComponent} from './pages/dropbox-page/dropbox-page.component';
import {TestApiPageComponent} from './pages/test-api-page/test-api-page.component';
import {BloomenTestPageComponent} from './pages/bloomen-test-page/bloomen-test-page.component';
import {YoutubePageComponent} from './pages/youtube-page/youtube-page.component';
import {FormBuilderPageComponent} from './pages/form-builder-page/form-builder-page.component';
import {QueryBuilderPageComponent} from './pages/query-builder-page/query-builder-page.component';
import {BlocksBuilderPageComponent} from './pages/blocks-builder-page/blocks-builder-page.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {JsonViewPageComponent} from './pages/json-view-page/json-view-page.component';
import {ConnectComponent} from './pages/connect/connect.component';

const routes: Routes = [
  {
    path: 'callback',
    component: AuthCallbackComponent
  },

  {
    path: 'dashboard',
    component: NotFoundComponent,
    data: {
      pageTitle: {'de': 'Instrumententafel', 'fr': '', 'en-US': 'Dashboard'},
      breadcrumb: {'de': 'Instrumententafel', 'fr': '', 'en-US': 'dashboard'},
      menuLabel: 'Dash title',
      icon: 'dashboard'
    },
  },
  {
    path: 'notifications',
    loadChildren: './notifications/notifications.module#NotificationsModule',
    data: {
      pageTitle: {'de': 'Channels', 'fr': '', 'en-US': 'Notifications'},
      breadcrumb: {'de': 'Channels', 'fr': '', 'en-US': 'notifications'},
      menuLabel: 'Notifications'
    }
  },
  {
    path: 'upload',
    component: UploadPageComponent,
    data: {
      pageTitle: 'Upload',
      breadcrumb: {'de': 'Hochladen', 'fr': '', 'en-US': 'Upload'},
      menuLabel: 'Upload'
    }
  },
  {
    path: 'adapters',
    component: AdaptersPageComponent,
    data: {
      pageTitle: 'Adapters',
      breadcrumb: {'de': 'Instrumententafel', 'fr': '', 'en-US': 'Adapters'},
      menuLabel: 'Adapters'
    }
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    data: {
      pageTitle: 'Settings',
      breadcrumb: {'de': 'die Einstellungen', 'fr': '', 'en-US': 'settings'},
      menuLabel: 'Settings'
    }
  },
  {
    path: 'user',
    component: UserPageComponent,
    data: {
      pageTitle: 'User',
      breadcrumb: 'User'
    }
  },
  {
    path: 'connect',
    component: ConnectComponent,
    data: {
      pageTitle: 'Connect',
      breadcrumb: 'Connect'
    }
  },
  {
    path: 'docs',
    component: DocsListPageComponent,
    data: {
      pageTitle: 'Docs',
      breadcrumb: 'Docs'
    }
  },
  {
    path: 'dropbox',
    component: DropboxPageComponent,
    data: {
      breadcrumb: 'Dropbox'
    }
  },
  {
    path: 'youtube',
    component: YoutubePageComponent,
    data: {
      breadcrumb: {'de': 'meine YouTube', 'fr': '', 'en': 'YouTube'},
    }
  },
  {
    path: 'test-api',
    component: TestApiPageComponent,
    data: {
      pageTitle: 'Test API',
      breadcrumb: 'Dashboard'
    }
  },
  {
    path: 'bloomen-api',
    component: BloomenTestPageComponent,
    data: {
      pageTitle: 'Bloomen API',
      breadcrumb: 'Bloomen',
      menuLabel: 'Bloomen API'
    }
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module',
    data: {
      pageTitle: 'Settings',
      breadcrumb: 'settings',
      menuLabel: 'Settings'
    }
  },
  {
    path: 'form-builder',
    component: FormBuilderPageComponent
  },
  {
    path: 'query-builder',
    component: QueryBuilderPageComponent
  },
  {
    path: 'blocks-builder',
    redirectTo: 'workflow-builder'
  },
  {
    path: 'workflow-builder',
    component: BlocksBuilderPageComponent
  },
  {
    path: 'json-view',
    component: JsonViewPageComponent
  },

  {
    path: '',
    component: NotFoundComponent
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
