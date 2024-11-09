import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInput } from '@angular/material/input';



@Component({
  template: `
  <section class="mat-form-field" style="margin: 16px 60px 26px 0">

  <mat-label>{{ to.label }}</mat-label><br><br>
        <div class="ngx-timepicker-field-example">
          <ngx-timepicker-field [format]="format" [defaultTime]="defaultTime" [controlOnly]="controlOnly"></ngx-timepicker-field>
        </div>

</section>

  `
})

export class TimePickerComponent extends FieldType<any> {
  get format(): string { return this.to.timeFormat || 12; }
  get controlOnly(): number { return this.to.hideClock || false; }
  get defaultTime(): string { return this.to.defaultTime || '7:13'; }
}
