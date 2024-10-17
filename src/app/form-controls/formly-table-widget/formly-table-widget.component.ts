import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { get } from 'lodash-es';

@Component({
  selector: 'app-formly-table-widget',
  templateUrl: './formly-table-widget.component.html',
  styleUrls: ['./formly-table-widget.component.scss'],
})
export class FormlyTableWidgetComponent
  extends FieldArrayType<FormlyFieldConfig>
  implements OnInit
{
  get allowAdd() {
    return get(this.field, 'templateOptions.uiSchema.allowAdd', true);
  }

  get allowRemove() {
    return get(this.field, 'templateOptions.uiSchema.allowRemove', true);
  }

  get colHeadings() {
    return get(this.field, 'templateOptions.uiSchema.colHeadings', []);
  }

  get blocksConfig() {
    return get(this.field, 'templateOptions.uiSchema.blocks', []) as Array<any>;
  }

  get hasBlocks() {
    return this.blocksConfig.length > 0;
  }

  get defaultValue() {
    return get(this.field, 'templateOptions.uiSchema.defaultValue', {});
  }

  // TODO: replace the HTML table with ag-grid

  constructor() {
    super();
  }

  ngOnInit() {}
}
