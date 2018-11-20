import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

const MATERIAL = [
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatChipsModule,
  MatSelectModule,
  MatInputModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: [
    ...MATERIAL
  ],
  declarations: []
})
export class KendraioMaterialModule { }
