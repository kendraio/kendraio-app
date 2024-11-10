import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {parse} from 'papaparse';
import X2JS from 'x2js';
import {fromPairs, get} from 'lodash-es';
import * as XLSX from 'xlsx';

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
    this.xmlOptions = {
      enableToStringFunc: false,
      ...get(config, 'xmlOptions', {})
    };
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
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      case 'application/vnd.ms-excel':
        try {
          const xF = XLSX.read(content, {type: 'binary'});
          const xData = fromPairs(xF.SheetNames
            .map(name => [name, XLSX.utils.sheet_to_json(xF.Sheets[name], { header: 1 })]));
          this.output.emit(xData);
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
