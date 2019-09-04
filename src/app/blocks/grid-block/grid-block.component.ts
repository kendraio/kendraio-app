import {Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {get, has, isArray, isObject} from 'lodash-es';
import {search} from 'jmespath';

@Component({
  selector: 'app-grid-block',
  templateUrl: './grid-block.component.html',
  styleUrls: ['./grid-block.component.scss']
})
export class GridBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};
  @ViewChild('modelOutput', {static: false}) modelOutput: ElementRef;

  @Output() output = new EventEmitter();

  @ViewChild('gridAngular', { static: false }) gridAngular;

  defaultColDef = {
    resizable: true
  };
  columnDefs = [];
  rowData = [];

  constructor(
    private readonly zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.updateOutputDisplay();
    this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
  }

  updateOutputDisplay() {
    this.columnDefs = this.preprocessColumnDefinition(get(this.config, 'columnDefs', []));
    this.rowData = isArray(this.model) ? this.model : get(this.model, 'result', []);
    if (!!this.gridAngular) {
      setTimeout(() => {
        this.zone.run(() => {
          this.gridAngular.api.sizeColumnsToFit();
        });
      }, 40);
    }
  }

  preprocessColumnDefinition(def: Array<any>) {
    return def.map(item => ({
      ...item,
      ...has(item, 'valueGetter') ? { valueGetter: ({ data }) => {
          // console.log({ data, item });
          try {
            return search(data, item['valueGetter']);
          } catch (e) {
            return e.message;
          }
        }} : {}
    }));
  }

}
