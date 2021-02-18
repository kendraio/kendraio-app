import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';

// NB: THIS IS THE JMESPath based validator block
//   THE NEW SCHEMA VALIDATOR IS CALLED validate-block

@Component({
  selector: 'app-validator-block',
  templateUrl: './validator-block.component.html',
  styleUrls: ['./validator-block.component.scss']
})
export class ValidatorBlockComponent extends BaseBlockComponent {

  hasError = false;
  errorMessage = 'Validation Failed';
  skipFirst = false;
  test = '`false`';

  onConfigUpdate(config: any) {
    this.skipFirst = get(config, 'skipFirst', false);
    this.test = get(config, 'test', '`false`');
    this.errorMessage = get(config, 'message', 'Validation Failed');
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange && this.skipFirst) {
      return;
    }
    this.hasError = false;
    const check = mappingUtility({data: this.model, context: this.context}, this.test);
    // console.log({ check });
    if (check === false || check === null) {
      this.hasError = true;
    } else {
      this.output.emit(this.model);
    }
  }

}
