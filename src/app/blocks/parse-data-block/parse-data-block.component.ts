import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {parse} from 'papaparse';
import * as X2JS from 'x2js';
import {get} from 'lodash-es';

@Component({
  selector: 'app-parse-data-block',
  templateUrl: './parse-data-block.component.html',
  styleUrls: ['./parse-data-block.component.scss']
})
export class ParseDataBlockComponent extends BaseBlockComponent {

  hasError = false;
  errorMessage = '';

  csvOptions = {};
  xmlOptions = {};

  onConfigUpdate(config) {
    this.csvOptions = get(config, 'csvOptions', {});
    this.xmlOptions = get(config, 'xmlOptions', {});
  }

  onData(data) {
    this.hasError = false;

    // Default to parsing as JSON
    const fileType = get(data, 'type', 'application/json');
    const content = get(data, 'content');

    if (!content) {
      return;
    }

    switch (fileType) {
      case 'text/csv':
        const parsedData = parse(content, this.csvOptions);
        if (!!parsedData.data) {
          this.output.emit(parsedData.data);
        } else {
          console.log(parsedData.errors);
        }
        break;
      case 'application/json':
        try {
          const parsedJSONData = JSON.parse(content);
          this.output.emit(parsedJSONData);
        } catch (e) {
          this.hasError = true;
          this.errorMessage = e.message;
        }
        break;
      case 'text/xml':
        const x2js = new X2JS(this.xmlOptions);
        try {
          const _r = x2js.xml2js(content);
          this.output.emit(_r);
        } catch (e) {
          this.hasError = true;
          this.errorMessage = e.message;
        }
        break;
      default:
        this.hasError = true;
        this.errorMessage = `Unknown file type ${fileType}`;
    }
  }

}
