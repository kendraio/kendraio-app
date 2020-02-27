import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get, isArray} from 'lodash-es';

@Component({
  selector: 'app-reference-block',
  templateUrl: './reference-block.component.html',
  styleUrls: ['./reference-block.component.scss']
})
export class ReferenceBlockComponent extends BaseBlockComponent {

  fieldLabel;
  labelField = 'label';
  labelGetter;
  valueField = 'uuid';
  defaultValue;
  required = false;

  values;


  constructor() {
    super();
  }

  onConfigUpdate(config: any) {
    this.fieldLabel = get(config, 'fieldLabel');
    this.labelField = get(config, 'labelField', 'label');
    this.labelGetter = get(config, 'labelGetter');
    this.valueField = get(config, 'valueField', 'uuid');
    this.required = get(config, 'required', false);




  }

  onData(data: any, firstChange: boolean) {
    if (isArray(data)) {
      this.values = data;
    }
    this.defaultValue = get(this.context, 'defaultValue');
  }

  onValueChange(value) {
    this.output.emit(value);
  }
}
