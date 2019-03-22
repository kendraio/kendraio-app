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

const routes: Routes = [
  {
    path: 'callback',
    component: AuthCallbackComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: Pages.DashboardPageComponent
      },
      {
        path: 'assets',
        component: Pages.AssetsPageComponent,
        data: {
          pageTitle: 'My Assets',
          subTitle: ''
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
        component: Pages.ImportPageComponent
      },
      {
        path: 'upload',
        component: UploadPageComponent
      },
      {
        path: 'visualise',
        component: VisualisePageComponent
      },
      {
        path: 'diagram/:adapter/:id',
        component: DiagramPageComponent
      },
      {
        path: 'adapters',
        component: AdaptersPageComponent
      },
      {
        path: 'settings',
        component: SettingsPageComponent
      },
      {
        path: 'user',
        component: UserPageComponent
      },
      {
        path: 'docs',
        component: DocsListPageComponent
      },
      {
        path: 'docs/:id',
        component: DocEditPageComponent
      },
      {
        path: 'dropbox',
        component: DropboxPageComponent
      },
      {
        path: 'api-client/:id',
        component: SwaggerPageComponent
      },
      {
        path: 'test-api',
        component: TestApiPageComponent
      },
      {
        path: 'bloomen-api',
        component: BloomenTestPageComponent
      },
      {
        path: 'files',
        loadChildren: './files/files.module#FilesModule'
      },
      {
        path: 'recordings',
        loadChildren: './music-recordings/music-recordings.module#MusicRecordingsModule'
      },
      {
        path: 'releases',
        loadChildren: './music-releases/music-releases.module#MusicReleasesModule'
      },
      {
        path: 'works',
        loadChildren: './music-works/music-works.module#MusicWorksModule'
      },
      {
        path: 'claims',
        loadChildren: './claims/claims.module#ClaimsModule'
      },
      { path: 'contacts', 
        loadChildren: './contacts/contacts.module#ContactsModule'},
      {
        path: 'settings',
        loadChildren: './settings/settings.module'
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
