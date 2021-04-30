import { Component, OnInit } from '@angular/core';
import {FieldArrayType, FormlyFieldConfig} from '@ngx-formly/core';
import {get} from 'lodash-es';
import {mappingUtility} from '../../blocks/mapping-block/mapping-util';

@Component({
  selector: 'app-formly-paginated-widget',
  templateUrl: './formly-paginated-widget.component.html',
  styleUrls: ['./formly-paginated-widget.component.scss']
})
export class FormlyPaginatedWidgetComponent extends FieldArrayType<FormlyFieldConfig> implements OnInit {

  activeItem = 0;

  // TODO: This gets called on every form refresh, so it probably going to cause slow pages
  getPageTitle(i) {
    const titleGetter = get(this.field, 'templateOptions.uiSchema.titleGetter', false);
    if (!titleGetter) {
      return `Item ${i + 1}`;
    }
    const v = mappingUtility(this.field.model[i], titleGetter);
    return v ? v : `Item ${i + 1}`;
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
