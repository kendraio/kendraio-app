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


// NB all routes must have a breadcrumb


const routes: Routes = [
  {
    path: 'callback',
    component: AuthCallbackComponent
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      breadcrumb: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        component: Pages.DashboardPageComponent,
        data: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: 'oldassets',
        component: Pages.AssetsPageComponent,
        data: {
          pageTitle: 'My Assets',
          subTitle: ''
        }
      },
      {
        path: 'assets',
        loadChildren: './assets/assets.module#AssetsModule',
        data: {
          breadcrumb: 'Assets'
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
          breadcrumb: 'Import'
        },
      },
      {
        path: 'upload',
        component: UploadPageComponent,
        data: {
          breadcrumb: 'Upload'
        }
      },
      {
        path: 'visualise',
        component: VisualisePageComponent,
        data: {
          breadcrumb: 'Visualise'
        }
      },
      {
        path: 'diagram/:adapter/:id',
        component: DiagramPageComponent,
        data: {
          breadcrumb: 'Diagram'
        }
      },
      {
        path: 'adapters',
        component: AdaptersPageComponent,
        data: {
          breadcrumb: 'Adapters'
        }
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
        data: {
          breadcrumb: 'Settings'
        }
      },
      {
        path: 'user',
        component: UserPageComponent,
        data: {
          breadcrumb: 'User'
        }
      },
      {
        path: 'docs',
        component: DocsListPageComponent,
        data: {
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
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'api-client/:id',
        component: SwaggerPageComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'test-api',
        component: TestApiPageComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'bloomen-api',
        component: BloomenTestPageComponent,
        data: {
          breadcrumb: 'Bloomen'
        }
      },
      // {
      //   path: 'files',
      //   loadChildren: './files/files.module#FilesModule'
      // },
      // {
      //   path: 'recordings',
      //   loadChildren: './music-recordings/music-recordings.module#MusicRecordingsModule'
      // },
      // {
      //   path: 'releases',
      //   loadChildren: './music-releases/music-releases.module#MusicReleasesModule'
      // },
      // {
      //   path: 'works',
      //   loadChildren: './music-works/music-works.module#MusicWorksModule'
      // },
      {
        path: 'claims',
        loadChildren: './claims/claims.module#ClaimsModule',
        data: {
          breadcrumb: 'Claims'
        } 
      },
      { path: 'contacts', 
        loadChildren: './contacts/contacts.module#ContactsModule',
        data: {
          breadcrumb: 'Contacts'
        } 
      },

        { path: 'tasks', 
        loadChildren: './tasks/tasks.module#TasksModule',
      
        data: {
          breadcrumb: 'Tasks'
        } 
      },

        { path: 'reports', 
        loadChildren: './reports/reports.module#ReportsModule',  
        data: {
          breadcrumb: 'Reports'
        }
      },

      {
        path: 'settings',
        loadChildren: './settings/settings.module',
        data: {
          breadcrumb: 'Settings'
        }
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
