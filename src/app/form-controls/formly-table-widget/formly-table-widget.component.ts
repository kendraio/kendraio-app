import { Component, OnInit } from '@angular/core';
import {FieldArrayType, FormlyFieldConfig} from '@ngx-formly/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-formly-table-widget',
  templateUrl: './formly-table-widget.component.html',
  styleUrls: ['./formly-table-widget.component.scss']
})
export class FormlyTableWidgetComponent extends FieldArrayType<FormlyFieldConfig> implements OnInit {

  // colHeadings = ['Owner', 'Split'];

  get colHeadings() {
    return get(this.field, 'templateOptions.uiSchema.colHeadings', []);
  }

  constructor(
  ) {
    super();
  }

  ngOnInit() {
  }

}
