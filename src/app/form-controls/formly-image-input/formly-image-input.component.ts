import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-image-input',
  templateUrl: './formly-image-input.component.html',
  styleUrls: ['./formly-image-input.component.scss'],
})
export class FormlyImageInputComponent extends FieldType implements OnInit {
  ngOnInit() {}
}
