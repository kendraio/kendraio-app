import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module'

import { ToolsRoutingModule } from './tools-routing.module';
import { ToolsindexComponent } from './toolsindex/toolsindex.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

@NgModule({
  declarations: [ToolsindexComponent, FormGeneratorComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    SharedModule
  ]
})
export class ToolsModule { }
