import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { get, has, isArray, isObject, isString } from 'lodash-es';
import * as stringify from 'json-stringify-safe';
import * as X2JS from 'x2js';

@Component({
  selector: 'app-file-export-block',
  templateUrl: './file-export-block.component.html',
  styleUrls: ['./file-export-block.component.scss'],
})
export class FileExportBlockComponent extends BaseBlockComponent {
  label = 'Export';
  fileName = 'exported';
  hasData = false;
  // block was originally designed to read JS File object "type"
  // a "format" config option has been added to allow overriding
  // e.g. for "xml"
  forceFormat = '';
  xmlOptions = {};

  onConfigUpdate(config: any) {
    super.onConfigUpdate(config);
    this.label = get(config, 'label', 'Export');
    this.fileName = get(config, 'fileName', 'exported');
    this.forceFormat = get(config, 'format', '');
    this.xmlOptions = get(config, 'xmlOptions', {});
  }

  get numberOfRows() {
    const objectHasKeys = (obj) => isObject(obj) && Object.keys(obj).length > 0;
    return isArray(this.model)
      ? this.model.length
      : objectHasKeys(this.model)
        ? 1
        : 0;
  }

  onData() {
    this.hasData = this.numberOfRows > 0;
  }

  exportData() {
    if (
      get(this.model, 'type') ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      const xlsxBlob = new Blob([this.model.content], {
        type: this.model.type,
      });
      const xlsxLink = document.createElement('a');
      if (xlsxLink.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(xlsxBlob);
        xlsxLink.setAttribute('href', url);
        xlsxLink.setAttribute('download', `${this.fileName}.xlsx`);
        xlsxLink.style.visibility = 'hidden';
        document.body.appendChild(xlsxLink);
        xlsxLink.click();
        document.body.removeChild(xlsxLink);
      }
      return;
    }

    if (this.forceFormat === 'xml') {
      const x2js = new X2JS(this.xmlOptions);
      const xmlData = x2js.js2xml(this.model);
      const xmlBlob = new Blob([xmlData], { type: `text/xml;charset=utf-8;` });
      const xmlLink = document.createElement('a');
      if (xmlLink.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(xmlBlob);
        xmlLink.setAttribute('href', url);
        xmlLink.setAttribute('download', `${this.fileName}.xml`);
        xmlLink.style.visibility = 'hidden';
        document.body.appendChild(xmlLink);
        xmlLink.click();
        document.body.removeChild(xmlLink);
      }
      return;
    }

    const format = isString(this.model)
      ? 'txt'
      : get(this.model, 'format', 'json');
    const outputData = isString(this.model)
      ? this.model
      : has(this.model, 'data') && isString(this.model.data)
        ? get(this.model, 'data')
        : stringify(this.model);

    const mimeTypes = {
      json: 'application/json',
      csv: 'text/csv',
      xml: 'text/xml',
      txt: 'text/plain',
    };
    const blob = new Blob([outputData], {
      type: `${mimeTypes[format]};charset=utf-8;`,
    });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${this.fileName}.${format}`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
