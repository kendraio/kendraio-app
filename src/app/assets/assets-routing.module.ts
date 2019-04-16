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
          pageTitle: {'de': 'Dateien' , 'fr': '', 'en-US': 'Files'},
          breadcrumb: {'de': 'Dateien' , 'fr': '', 'en-US': 'Files'},
          menuLabel: 'Asset Files'
  
        }
      },
      {
        path: 'releases',
        loadChildren: './music-releases/music-releases.module#MusicReleasesModule',
        data: {
          pageTitle: {'de': 'Veröffentlichungen' , 'fr': '', 'en-US': 'Releases'},
          breadcrumb: {'de': 'Veröffentlichungen' , 'fr': '', 'en-US': 'Releases'},
          menuLabel: 'Asset Releases'
        }
      },
      {
        path: 'recordings',
        loadChildren: './music-recordings/music-recordings.module#MusicRecordingsModule',
        data: {
          pageTitle:  {'de': 'Aufnahmen' , 'fr': '', 'en-US': 'Recordings'},
          breadcrumb: {'de': 'Aufnahmen' , 'fr': '', 'en-US': 'Recordings'},
        }
      },
      {
        path: 'works',
        loadChildren: './music-works/music-works.module#MusicWorksModule',
        data: {
          pageTitle: 'Assets: Works',
          breadcrumb: {'de': 'Arbeitet' , 'fr': '', 'en-US': 'Works'},
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
