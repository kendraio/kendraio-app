import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isArray} from 'lodash-es';
import { unparse } from 'papaparse';

@Component({
  selector: 'app-csv-export-block',
  templateUrl: './csv-export-block.component.html',
  styleUrls: ['./csv-export-block.component.scss']
})
export class CsvExportBlockComponent implements OnInit {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  get numberOfRows() {
    return isArray(this.model) ? this.model.length : 0;
  }

  constructor() { }

  ngOnInit() {
  }

  exportData() {
    const { type, ...config } = this.config;
    const csv = unparse(this.model, config);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'exported.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

}
