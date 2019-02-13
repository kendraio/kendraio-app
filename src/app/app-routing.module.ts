import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DocsListPageComponent } from './pages/docs-list-page/docs-list-page.component';
import { DocEditPageComponent } from './pages/doc-edit-page/doc-edit-page.component';
import { DashboardPageComponent, AssetsPageComponent, ImportPageComponent } from './pages';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { VisualisePageComponent } from './pages/visualise-page/visualise-page.component';
import { AdaptersPageComponent } from './pages/adapters-page/adapters-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { DropboxPageComponent } from './pages/dropbox-page/dropbox-page.component';
import { SwaggerPageComponent } from './pages/swagger-page/swagger-page.component';

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
        component: DashboardPageComponent
      },
      {
        path: 'assets',
        component: AssetsPageComponent,
        data: {
          pageTitle: 'My Assets',
          subTitle: ''
        }
      },
      {
        path: 'import',
        component: ImportPageComponent
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
