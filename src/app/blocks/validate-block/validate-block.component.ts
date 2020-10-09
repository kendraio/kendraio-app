import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import Ajv from 'ajv';
import {get} from 'lodash-es';

@Component({
  selector: 'app-validate-block',
  templateUrl: './validate-block.component.html',
  styleUrls: ['./validate-block.component.scss']
})
export class ValidateBlockComponent extends BaseBlockComponent {

  schema = null;
  validator = null;
  errors = null;

  onConfigUpdate(config: any) {
    const ajv = new Ajv({allErrors: true});
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
