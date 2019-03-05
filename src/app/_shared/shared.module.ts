
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
  MatMenuModule, MatDialogModule, MatTooltipModule
} from '@angular/material';

import * as matComponents from '../_shared/components';
import { AgGridModule } from 'ag-grid-angular';
import { SendClaimsComponent } from 'src/app/claims/send-claims/send-claims.component';
import { FlexModule } from '@angular/flex-layout';


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
    AgGridModule.withComponents(
      [
        matComponents.MatInputComponent,
        matComponents.MatButtonComponent
      ]
    ),
    FlexModule
  ],
  declarations: [
    matComponents.MatInputComponent,
    matComponents.MatButtonComponent,
    SendClaimsComponent
  ],
  exports: [
  //  matComponents.MatInputComponent,
  MatMenuModule,
  SendClaimsComponent

  ],
  providers: [
    DatePipe,
    LowerCasePipe,
  ],
  entryComponents: [   
    SendClaimsComponent
   ]
})
export class SharedModule {}
