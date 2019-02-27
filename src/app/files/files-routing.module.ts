import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  IndexComponent, 
  FileDetailsComponent, 
  FileEditComponent 
} from './index';

// import { SharedModule } from '../_shared/shared.module';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'file-detail/:id', component: FileDetailsComponent},
  { path: 'file-edit/:id', component: FileEditComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
