
import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatCardModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatButtonModule,
  MatMenuModule, MatDialogModule, MatTooltipModule, MatListModule
} from '@angular/material';

import * as matComponents from '../_shared/components';
import { AgGridModule } from 'ag-grid-angular';
import { SendClaimsComponent } from 'src/app/claims/send-claims/send-claims.component';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { ClaimsEditComponent } from '../claims/claims-edit/claims-edit.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatDialogModule,
    MatTooltipModule,
    MatListModule,
    AgGridModule.withComponents(
      [
        matComponents.MatInputComponent,
        matComponents.MatButtonComponent
      ]
    ),
    FlexModule, FlexLayoutModule,
    DynamicFormsMaterialUIModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    matComponents.MatInputComponent,
    matComponents.MatButtonComponent,
    SendClaimsComponent,
    ClaimsEditComponent
  ],
  exports: [
  //  matComponents.MatInputComponent,
  MatMenuModule,
  SendClaimsComponent,
  DynamicFormsMaterialUIModule,
  FormsModule,
  ReactiveFormsModule,
  FlexModule,
  FlexLayoutModule,
  ClaimsEditComponent,
  MatListModule,

  ],
  providers: [
    DatePipe,
    LowerCasePipe,
  ],
  entryComponents: [   
    SendClaimsComponent,
    ClaimsEditComponent //may move this to claims module
   ]
})
export class SharedModule {}
