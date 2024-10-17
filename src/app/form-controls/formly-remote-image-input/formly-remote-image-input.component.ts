import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-remote-image-input',
  templateUrl: './formly-remote-image-input.component.html',
  styleUrls: ['./formly-remote-image-input.component.scss'],
})
export class FormlyRemoteImageInputComponent
  extends FieldType
  implements OnInit
{
  ngOnInit() {}
}
