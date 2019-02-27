
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
  MatButtonModule
} from '@angular/material';

import * as matComponents from '../_shared/components';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
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
    AgGridModule.withComponents(
      [
        matComponents.MatInputComponent,
        matComponents.MatButtonComponent
      ]
    )
  ],
  declarations: [
    matComponents.MatInputComponent,
    matComponents.MatButtonComponent
  ],
  exports: [
  //  matComponents.MatInputComponent,

  ],
  providers: [
    DatePipe,
    LowerCasePipe,
  ]
})
export class SharedModule {}
