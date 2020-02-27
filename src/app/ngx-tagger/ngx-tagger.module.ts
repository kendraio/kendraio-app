import { NgModule } from '@angular/core';
import { NgxTaggerComponent } from './ngx-tagger.component';
import { CommonModule } from '@angular/common';
import { TagBaseDirective } from './tag-base.directive';
import { TagDirective } from './tag.directive';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TagPreviewDirective } from './tag-preview.directive';

@NgModule({
  declarations: [
    NgxTaggerComponent,
    TagBaseDirective,
    TagDirective,
    TagPreviewDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxTaggerComponent,
    TagPreviewDirective,
    TagBaseDirective
  ]
})
export class NgxTaggerModule { }
