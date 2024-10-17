import { NgModule } from '@angular/core';
import { NgxImageTaggerComponent } from './ngx-image-tagger.component';
import { CommonModule } from '@angular/common';
import { TagBaseDirective } from './tag-base.directive';
import { TagPreviewDirective } from './tag-preview.directive';
import { TagDirective } from './tag.directive';
import { NgxTaggerComponent } from './ngx-tagger.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgxImageTaggerComponent,
    TagBaseDirective,
    TagPreviewDirective,
    TagDirective,
    NgxTaggerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgxImageTaggerComponent],
})
export class NgxImageTaggerModule {}
