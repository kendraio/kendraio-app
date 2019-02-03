import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatGridListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatToolbarModule
} from "@angular/material";
import { ScrollingModule } from "@angular/cdk/scrolling";

const MATERIAL = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatListModule,
  ScrollingModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: [ ...MATERIAL ]
})
export class AppMaterialModule { }
