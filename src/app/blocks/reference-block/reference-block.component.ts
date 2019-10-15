import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get, isArray} from 'lodash-es';

@Component({
  selector: 'app-reference-block',
  templateUrl: './reference-block.component.html',
  styleUrls: ['./reference-block.component.scss']
})
export class ReferenceBlockComponent extends BaseBlockComponent {

  label;
  labelField = 'label';

  values;

  constructor() {
    super();
  }

  onConfigUpdate(config: any) {
    this.label = get(config, 'label');
    this.labelField = get(config, 'labelField', 'label');
  }

  onData(data: any, firstChange: boolean) {
    if (isArray(data)) {
      this.values = data;
    }
  }

  onValueChange(value) {
    this.output.emit(value);
  }
}
