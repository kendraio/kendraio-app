import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './';


const routes: Routes = [
  {
    path: '',
    component: pages.AssetsComponent,
    data: {
      breadcrumb: '',
      menuLabel: 'Assets'
    },
    children: [
      {
        path: 'files',
        loadChildren: './files/files.module#FilesModule',
        data: {
          breadcrumb: 'Files',
          menuLabel: 'Asset Files'
  
        }
      },
      {
        path: 'releases',
        loadChildren: './music-releases/music-releases.module#MusicReleasesModule',
        data: {
          breadcrumb: 'Releases',
          menuLabel: 'Asset Releases'
        }
      },
      {
        path: 'recordings',
        loadChildren: './music-recordings/music-recordings.module#MusicRecordingsModule',
        data: {
          breadcrumb: 'Recordings'
        }
      },
      {
        path: 'works',
        loadChildren: './music-works/music-works.module#MusicWorksModule',
        data: {
          breadcrumb: 'Works'
        }
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
