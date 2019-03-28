import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsComponent } from '.';
import { SharedModule } from '../_shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AssetsComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    SharedModule,
    AppMaterialModule,
    AgGridModule.withComponents(
      []
  ),
  ]
})
export class AssetsModule { }
