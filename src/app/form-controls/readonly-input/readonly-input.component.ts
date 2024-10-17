import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-readonly-input',
  templateUrl: './readonly-input.component.html',
  styleUrls: ['./readonly-input.component.scss'],
})
export class ReadonlyInputComponent extends FieldType implements OnInit {
  ngOnInit() {}
}
