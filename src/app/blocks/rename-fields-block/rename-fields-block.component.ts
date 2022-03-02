import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get, isArray} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';

@Component({
  selector: 'app-rename-fields-block',
  templateUrl: './rename-fields-block.component.html',
  styleUrls: ['./rename-fields-block.component.scss']
})
export class RenameFieldsBlockComponent  extends BaseBlockComponent {

  mapping = [];
  mappingGetter = undefined;
  inputGetter = 'data';

  onConfigUpdate(config: any) {
    this.mapping = get(config, 'mapping', []);
    this.mappingGetter = get(config, 'mappingGetter');
    this.inputGetter = get(config, 'inputGetter', 'data');
  }

  onData(data: any, firstChange: boolean) {
    const fieldMapping = (this.mappingGetter)
      ? mappingUtility({ data: this.model, context: this.context}, this.mappingGetter)
      : this.mapping;
    const input = mappingUtility({ data: this.model, context: this.context}, this.inputGetter);

    let output;
    if (isArray(input)) {
      output = input.map(item => this.mapItem(item, fieldMapping));
    } else {
      output = this.mapItem(input, fieldMapping);
    }
    if (output) {
      this.output.emit(output);
    }

  }

  mapItem(item, fieldMapping) {
    const output = {};
    (fieldMapping || []).forEach(({ source, target }) => {
      output[target] = item[source];
    });
    return output;
  }


}
