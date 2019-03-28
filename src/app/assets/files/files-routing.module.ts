import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  FilesComponent, 
  FileDetailsComponent, 
  FileEditComponent 
} from './index';

// import { SharedModule } from '../_shared/shared.module';

const routes: Routes = [
  { path: '', component: FilesComponent },
  { path: 'file-detail/:id', component: FileDetailsComponent},
  { path: 'file-edit/:id', component: FileEditComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
