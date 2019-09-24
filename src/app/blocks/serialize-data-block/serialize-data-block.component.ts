import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import * as serialize from 'json-stringify-safe';
import * as X2JS from 'x2js';
import {unparse} from 'papaparse';
import {get, isArray, isObject} from 'lodash-es';

@Component({
  selector: 'app-serialize-data-block',
  templateUrl: './serialize-data-block.component.html',
  styleUrls: ['./serialize-data-block.component.scss']
})
export class SerializeDataBlockComponent extends BaseBlockComponent {

  hasFormatSelection = false;
  outputFormats = ['json'];
  selectedFormat = 'json';
  hasError = false;
  errorMessage = '';

  csvOptions = {};
  xmlOptions = {};

  onConfigUpdate(config) {
    this.hasFormatSelection = get(config, 'hasFormatSelection', false) as boolean;
    this.outputFormats = get(config, 'formats', ['json']);
    if (!this.hasFormatSelection) {
      this.selectedFormat = this.outputFormats[0];
    }
    this.csvOptions = get(config, 'csvOptions', {});
    this.xmlOptions = get(config, 'xmlOptions', {});
  }

  get numberOfRows() {
    const objectHasKeys = obj => isObject(obj) && Object.keys(obj).length > 0;
    return isArray(this.model) ? this.model.length : objectHasKeys(this.model) ? 1 : 0;
  }

  onFormatChange() {
    this.onData();
  }

  onData() {
    if (this.numberOfRows === 0) {
      return;
    }
    this.hasError = false;
    let data = '';
    switch (this.selectedFormat) {
      case 'json':
        data = serialize(this.model);
        break;
      case 'xml':
        const x2js = new X2JS();
        data = x2js.js2xml(isArray(this.model) ? { rows: { row: this.model }} : this.model);
        break;
      case 'csv':
        data = unparse(this.model, this.csvOptions);
        break;
    }
    this.output.emit({
      format: this.selectedFormat,
      data
    });
  }
}
