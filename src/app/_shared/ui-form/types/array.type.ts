import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
 <mat-card>
 <mat-card-header *ngIf="to.label">{{ to.label }}</mat-card-header>
 <mat-card-subtitle *ngIf="to.description">{{ to.description }}</mat-card-subtitle>

    <mat-card-content>

            <div class="alert alert-danger" role="alert" *ngIf="showError">
              <formly-validation-message [field]="field"></formly-validation-message>
            </div>

            <div *ngFor="let field of field.fieldGroup;let i = index;" class="row">
              <formly-field class="col-sm-10" [field]="field"></formly-field>
              <div class="col-sm-2">
                <button mat-raised-button color="warn" type="button" (click)="remove(i)">Remove</button>
              </div>
            </div>

    </mat-card-content>

    <mat-card-actions class="row">
      <div class="col-sm-2 offset-sm-10">
        <button mat-raised-button color="primary" type="button" (click)="add()">Add</button>
      </div>
    <mat-card-actions>
<!-- // mat-card: wont accept closing tag??? -->
  `,
})
export class ArrayTypeComponent extends FieldArrayType {}

