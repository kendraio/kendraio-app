import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  FilesComponent, 
  FileDetailsComponent, 
  FileEditComponent 
} from './index';

// import { SharedModule } from '../_shared/shared.module';

const routes: Routes = [
  { path: '', component: FilesComponent, 
  data: {
    breadcrumb: ''
  }
},
  { path: 'file-detail/:id', component: FileDetailsComponent, 
  data: {
    breadcrumb: 'gsdfgsdf'
  }},
  { path: 'file-edit/:id', component: FileEditComponent, 
  data: {
    breadcrumb: 'sdfgsdfg'
  }},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
