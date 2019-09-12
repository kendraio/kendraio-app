import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'app-field-input-password',
  template: `

  <mat-form-field>
    <input matInput
    [maxlength]="to.maxLength"
    placeholder="Enter your password"
    [id]="id"
    [formControl]="formControl"
    [placeholder]="placeholder"
    [type]="hide ? 'password' : 'text'">
    <label mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
    </label>

    <mat-hint>{{description}}</mat-hint>

    <mat-hint align="end">
    {{hint}}
    </mat-hint>



    <mat-error>
    <formly-validation-message [field]="field"></formly-validation-message>
  </mat-error>
  </mat-form-field>

 `,
})

export class FieldInputPasswordComponent extends FieldType {
  hide = true;

  get placeholder(): string {return this.to.placeholder ||  this.to.label; }
  get description(): string {return this.to.description; }
  get hint(): string {return this.to.hint || ''; }


}

