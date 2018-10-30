import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AdaptersPageComponent } from './pages/adapters-page/adapters-page.component';
import { VisualisePageComponent } from './pages/visualise-page/visualise-page.component';
import { UploadPageComponent } from './pages/upload-page/upload-page.component';
import { ImportPageComponent } from './pages/import-page/import-page.component';
import { NodeEditPageComponent } from './pages/node-edit-page/node-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent
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
        path: 'node/:id',
        component: NodeEditPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
