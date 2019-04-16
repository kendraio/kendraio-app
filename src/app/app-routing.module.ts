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
import { SwaggerPageComponent } from './pages/swagger-page/swagger-page.component';
import {TestApiPageComponent} from './pages/test-api-page/test-api-page.component';
import {DiagramPageComponent} from './pages/diagram-page/diagram-page.component';
import { PeopleComponent } from './contacts/people/people.component';
import {BloomenTestPageComponent} from './pages/bloomen-test-page/bloomen-test-page.component';
import { DashboardPageComponent } from './pages';


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
  // {
  //   path: 'callback',
  //   component: AuthCallbackComponent
  // },

 //   children: [
      {
        path: 'dashboard',
        component: Pages.DashboardPageComponent,
        data: {
          pageTitle: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'Dashboard' },
          breadcrumb: {'de': 'Instrumententafel' , 'fr': '', 'en-US': 'Dashboard' },
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
          pageTitle: {'de': 'Vermögenswerte' , 'fr': '', 'en-US': 'Assets-----'},
          breadcrumb: {'de': 'Vermögenswerte' , 'fr': '', 'en-US': 'Assets'},
          menuLabel: 'Assets-BGTT'
          
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
          breadcrumb:  {'de': 'die Einstellungen' , 'fr': '', 'en-US': 'Settings'},
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
        path: 'api-client/:id',
        component: SwaggerPageComponent,
        data: {
          breadcrumb: 'API'
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
        path: 'claims',
        loadChildren: './claims/claims.module#ClaimsModule',
        data: {
          pageTitle: 'Claims',
          breadcrumb: 'Claims',
          menuLabel: 'Claims'
        } 
      },
      { path: 'contacts', 
        loadChildren: './contacts/contacts.module#ContactsModule',
        data: {
          pageTitle: 'Contacts',
          breadcrumb: 'Contacts',
          menuLabel: 'Contacts'

        } 
      },

        { path: 'tasks', 
        loadChildren: './tasks/tasks.module#TasksModule',      
        data: {
          pageTitle: 'Tasks',
          breadcrumb: 'Tasks',
          menuLabel: 'Tasks'
        } 
      },

        { path: 'reports', 
        loadChildren: './reports/reports.module#ReportsModule',  
        data: {
          pageTitle: 'Reports',
          breadcrumb: 'Reports',
          menuLabel: 'Reports'
        }
      },

      {
        path: 'settings',
        loadChildren: './settings/settings.module',
        data: {
          pageTitle: 'Settings',
          breadcrumb: 'Settings',
          menuLabel: 'Settings'
        }
      },
       { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
       { path: '**', redirectTo: '/', pathMatch: 'full' },
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
