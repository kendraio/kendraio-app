import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { get, has } from 'lodash-es';

@Component({
  selector: 'app-validate-block',
  templateUrl: './validate-block.component.html',
  styleUrls: ['./validate-block.component.scss'],
})
export class ValidateBlockComponent extends BaseBlockComponent {
  schema = null;
  validator = null;
  errors = null;

  useGoSub = false;
  errorBlocks = [];
  goSubConfig = {
    workflowId: '',
    adapterName: '',
  };

  onConfigUpdate(config: any) {
    if (has(config, 'onError.blocks')) {
      this.useGoSub = false;
      this.errorBlocks = get(config, 'onError.blocks', []);
    } else if (
      has(config, 'onError.workflowId') &&
      has(config, 'onError.adapterName')
    ) {
      this.useGoSub = true;
      this.goSubConfig.adapterName = get(config, 'onError.adapterName', '');
      this.goSubConfig.workflowId = get(config, 'onError.workflowId', '');
    }
    const ajv = new Ajv({
      allErrors: true,
    });
    // THIS ANY TYPE BELOW IS NEEDED BECAUSE OF COMPILE ERROR:
    //  Types of property 'opts' are incompatible.
    //    The types returned by 'compare(...)' are incompatible between these types.
    //                           Type 'boolean' is not assignable to type 'number'.
    addFormats(ajv);

    this.schema = get(config, 'schema', null);
    if (this.schema) {
      this.validator = ajv.compile(this.schema);
    } else {
      this.validator = null;
    }
  }

  onData(data: any, firstChange: boolean) {
    this.errors = null;
    if (this.validator) {
      const valid = this.validator(data);
      if (valid) {
        this.output.emit(data);
      } else {
        this.errors = this.validator.errors;
      }
    }
  }
}
