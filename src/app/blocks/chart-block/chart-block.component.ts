import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {get, isArray, isObject} from 'lodash-es';

@Component({
  selector: 'app-chart-block',
  templateUrl: './chart-block.component.html',
  styleUrls: ['./chart-block.component.scss']
})
export class ChartBlockComponent implements OnInit, OnChanges {

  rowData = [];
  outputConfig = {};

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.updateOutputDisplay();
    this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
  }

  updateOutputDisplay() {
    this.rowData = isArray(this.model) ? this.model : get(this.model, 'result', []);
  }
}
