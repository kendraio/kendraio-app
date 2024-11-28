import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {flatten, get} from 'lodash-es';

@Component({
  selector: 'app-data-import-block',
  templateUrl: './data-import-block.component.html',
  styleUrls: ['./data-import-block.component.scss']
})
export class DataImportBlockComponent extends BaseBlockComponent  {

  hasError = false;
  errorMessage = '';

  accept = 'text/csv';
  label = 'Import';

  csvConfig = {};
  xmlConfig = {};

  onConfigUpdate(config) {
    this.csvConfig = get(config, 'csvConfig', {});
    this.xmlConfig = get(config, 'xmlConfig', {});
    const mimeTypeMap = {
      'csv': ['text/csv'],
      'json': ['application/json'],
      'xml': ['text/xml', 'application/json']
    };
    this.accept = flatten(get(config, 'accept', ['csv']).map(key => mimeTypeMap[key])).join(', ');
  }


}
