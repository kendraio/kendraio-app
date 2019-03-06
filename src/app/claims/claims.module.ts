import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AppMaterialModule } from '../app-material/app-material.module';

import { ClaimsRoutingModule } from './claims-routing.module';
import { IndexComponent } from './index/index.component';
// import { SendClaimsComponent } from './send-claims/send-claims.component';
// import { MatButtonModule,  MatButton } from '@angular/material';
// import {MatDialogModule} from '@angular/material';
import { SharedModule } from '../_shared/shared.module';
// import { ClaimsEditComponent } from './claims-edit/claims-edit.component';

import { AppMaterialModule } from '../app-material/app-material.module';
// import { FlexLayoutModule } from '@angular/flex-layout';

import {AgGridModule} from 'ag-grid-angular';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';


@NgModule({
  declarations: [
    IndexComponent
    //ClaimsEditComponent, 
    // SendClaimsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClaimsRoutingModule,
    DynamicFormsMaterialUIModule,
    // FlexLayoutModule
    // AppMaterialModule,
    // MatButtonModule,
    // MatDialogModule
    AgGridModule.withComponents(
      []
  ),
  AppMaterialModule,
  ],
  entryComponents: [   
  //  SendClaimsComponent
  ]
})
export class ClaimsModule { }
