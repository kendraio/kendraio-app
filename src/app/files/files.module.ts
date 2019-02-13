import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { IndexComponent, FileDetailsComponent } from './index';
import { FileEditComponent } from './file-edit/file-edit.component';


@NgModule({
  declarations: [IndexComponent, FileDetailsComponent, FileEditComponent],
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  bootstrap: [IndexComponent]
})
export class FilesModule { }
