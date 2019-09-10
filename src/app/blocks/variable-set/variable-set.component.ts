import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get, isArray, isObject} from 'lodash-es';
import * as stringify from 'json-stringify-safe';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-variable-set',
  templateUrl: './variable-set.component.html',
  styleUrls: ['./variable-set.component.scss']
})
export class VariableSetComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor(
    private readonly notify: MatSnackBar
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    const adapterName = get(this.context, 'app.adapterName', 'UNKNOWN');
    const variableName = get(this.config, 'name', 'UNKNOWN');
    const data = stringify(this.model);
    localStorage.setItem(`${adapterName}.variables.${variableName}`, data);
    const message = `${variableName} update successful`;
    this.notify.open(message, 'OK', {
      duration: 4000,
      verticalPosition: 'top'
    });
    this.output.emit(clone(this.model));
  }

}
