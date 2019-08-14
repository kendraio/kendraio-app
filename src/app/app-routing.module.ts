import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DocsListPageComponent } from './pages/docs-list-page/docs-list-page.component';
import { DocEditPageComponent } from './pages/doc-edit-page/doc-edit-page.component';
import * as Pages from './pages';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { VisualisePageComponent } from './pages/visualise-page/visualise-page.component';
import { AdaptersPageComponent } from './pages/adapters-page/adapters-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { DropboxPageComponent } from './pages/dropbox-page/dropbox-page.component';
// import { SwaggerPageComponent } from './pages/swagger-page/swagger-page.component';
import {TestApiPageComponent} from './pages/test-api-page/test-api-page.component';
import {DiagramPageComponent} from './pages/diagram-page/diagram-page.component';
import { PeopleComponent } from './contacts/people/people.component';
import {BloomenTestPageComponent} from './pages/bloomen-test-page/bloomen-test-page.component';
import { DashboardPageComponent } from './pages';
import {YoutubePageComponent} from './pages/youtube-page/youtube-page.component';
import {BloomenSearchPageComponent} from './pages/bloomen-search-page/bloomen-search-page.component';
import { FormTestPageComponent } from './pages/form-test-page/form-test-page.component';
import {FormBuilderPageComponent} from './pages/form-builder-page/form-builder-page.component';


// NB all routes must have a breadcrumb


const routes: Routes = [


  // {
  //   path: '',
  //   component: DashboardPageComponent,
  //   data: {
  //     breadcrumb: 'Home',
  //     menuLabel: 'Home title',
  //     icon: 'dashboard'
  //   }

  // },
  {
    path: 'callback',
    component: AuthCallbackComponent
  },

 //   children: [
      {
        path: 'dashboard',
        component: Pages.DashboardPageComponent,
        data: {
          pageTitle: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'Dashboard' },
          breadcrumb: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'dashboard' },
          menuLabel: 'Dash title',
          icon: 'dashboard'
        },
      },
      // {
      //   path: 'oldassets',
      //   component: Pages.AssetsPageComponent,
      //   data: {
      //     pageTitle: 'My Assets',
      //     subTitle: ''
      //   }
      // },
      {
        path: 'assets',
        loadChildren: './assets/assets.module#AssetsModule',
        data: {
          pageTitle: {'de': 'Vermögenswerte' , 'fr': '', 'en-US': 'assets'},
          breadcrumb: {'de': 'Vermögenswerte' , 'fr': '', 'en-US': 'assets'},
          menuLabel: 'Assets-BGTT'
        }
      },
      {
        path: 'services',
        loadChildren: './channels/channels.module#ChannelsModule',
        data: {
          pageTitle: {'de': 'Channels' , 'fr': '', 'en-US': 'Channels'},
          breadcrumb: {'de': 'Channels' , 'fr': '', 'en-US': 'channels'},
          menuLabel: 'Assets-BGTT'
        }
      },
      {
        path: 'bloomen',
        loadChildren: './bloomen/bloomen.module#BloomenModule',
        data: {
          pageTitle: {'de': 'Channels' , 'fr': '', 'en-US': 'Bloomen'},
          breadcrumb: {'de': 'Bloomen' , 'fr': '', 'en-US': 'Bloomen'},
          menuLabel: 'Bloomen'
        }
      },
      {
          path: 'bloomen/search',
          component: BloomenSearchPageComponent
      },
      {
        path: 'notifications',
        loadChildren: './notifications/notifications.module#NotificationsModule',
        data: {
          pageTitle: {'de': 'Channels' , 'fr': '', 'en-US': 'Notifications'},
          breadcrumb: {'de': 'Channels' , 'fr': '', 'en-US': 'notifications'},
          menuLabel: 'Notifications'
        }
      },

      // {
      //   path: 'contacts',
      //   component: Pages.ContactsComponent,
      //   data: {
      //     pageTitle: 'Contacts',
      //     subTitle: ''
      //   }
      // },

      {
        path: 'import',
        component: Pages.ImportPageComponent,
        data: {
          pageTitle: 'Import',
          breadcrumb: {'de': 'Einführen' , 'fr': '', 'en-US': 'Import'},
          menuLabel:  'Import'
        },
      },
      {
        path: 'upload',
        component: UploadPageComponent,
        data: {
          pageTitle: 'Upload',
          breadcrumb: {'de': 'Hochladen' , 'fr': '', 'en-US': 'Upload'},
          menuLabel:  'Upload'
        }
      },
      {
        path: 'visualise',
        component: VisualisePageComponent,
        data: {
          breadcrumb: 'Visualise',
          menuLabel:  'Visualise'
        }
      },
      {
        path: 'diagram/:adapter/:id',
        component: DiagramPageComponent,
        data: {
          breadcrumb: 'Diagram',
          menuLabel:  'Diagram'
        }
      },
      {
        path: 'adapters',
        component: AdaptersPageComponent,
        data: {
          pageTitle: 'Adapters',
          breadcrumb:  {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'Adapters'},
          menuLabel:  'Adapters'
        }
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
        data: {
          pageTitle: 'Settings',
          breadcrumb:  {'de': 'die Einstellungen' , 'fr': '', 'en-US': 'settings'},
          menuLabel:  'Settings'
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
        path: 'docs',
        component: DocsListPageComponent,
        data: {
          pageTitle: 'Docs',
          breadcrumb: 'Docs'
        }
      },
      {
        path: 'docs/:id',
        component: DocEditPageComponent,
        data: {
          breadcrumb: 'View'
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
      breadcrumb:  {'de': 'meine YouTube' , 'fr': '', 'en': 'YouTube'},
    }
  },

      // {
      //   path: 'api-client/:id',
      //   component: SwaggerPageComponent,
      //   data: {
      //     breadcrumb: 'API'
      //   }
      // },
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
        path: 'claims',
        loadChildren: './claims/claims.module#ClaimsModule',
        data: {
          pageTitle: 'Claims',
          breadcrumb: 'claims',
          menuLabel: 'Claims'
        }
      },
      { path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule',
        data: {
          pageTitle: 'Contacts',
          breadcrumb: 'contacts',
          menuLabel: 'Contacts'

        }
      },

        { path: 'tasks',
        loadChildren: './tasks/tasks.module#TasksModule',
        data: {
          pageTitle: 'Tasks',
          breadcrumb: 'tasks',
          menuLabel: 'Tasks'
        }
      },
        { path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule',
        data: {
          pageTitle: 'Reports',
          breadcrumb: 'reports.title',
          menuLabel: 'Reports'
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
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule',
        data: {
          pageTitle: 'Tools',
          breadcrumb: 'tools',
          menuLabel: 'Tools'
        }
      },
  {
    path: 'form-test',
    component: FormTestPageComponent
  },
  {
    path: 'form-builder',
    component: FormBuilderPageComponent
  },

       { path: '', redirectTo: '/tasks', pathMatch: 'full' },
       { path: '**', redirectTo: '/tasks', pathMatch: 'full' },
  //  ]
 // }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
