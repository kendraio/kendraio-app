import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module'

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsindexComponent } from './toolsindex/toolsindex.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { ContentEditableFormDirective } from '../_shared/directives/editable-content';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [ToolsindexComponent, FormGeneratorComponent,  ContentEditableFormDirective],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class ToolsModule { }
