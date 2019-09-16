import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { clone } from 'lodash-es';
import { parse } from 'papaparse';

@Component({
  selector: 'app-csv-import-block',
  templateUrl: './csv-import-block.component.html',
  styleUrls: ['./csv-import-block.component.scss']
})
export class CsvImportBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {

  }

  onFileChange(event) {
    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.onload = (_) => {
      const { type, ...config } = this.config;
      const parsedData = parse(fileReader.result as any, config);
      if (!!parsedData.data) {
        this.output.emit(parsedData.data);
      } else {
        console.log(parsedData.errors);
      }
    };
    fileReader.readAsText(file);
  }


}
