import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './';


const routes: Routes = [
  {
    path: '',
    component: pages.AssetsComponent
  },
  {
    path: 'files',
    loadChildren: './files/files.module#FilesModule'
  },
  {
    path: 'releases',
    loadChildren: './music-releases/music-releases.module#MusicReleasesModule'
  },
  {
    path: 'recordings',
    loadChildren: './music-recordings/music-recordings.module#MusicRecordingsModule'
  },
  {
    path: 'works',
    loadChildren: './music-works/music-works.module#MusicWorksModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
