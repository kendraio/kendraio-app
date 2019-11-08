import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, get} from 'lodash-es';

@Component({
  selector: 'app-variable-get',
  templateUrl: './variable-get.component.html',
  styleUrls: ['./variable-get.component.scss']
})
export class VariableGetComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  hasError = false;
  errorMessage = '';
  skipFirst = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.skipFirst = get(this.config, 'skipFirst', true);
    if (this.skipFirst && get(changes, 'model.firstChange', false)) {
      return;
    }
    const adapterName = get(this.context, 'app.adapterName', 'UNKNOWN');
    const variableName = get(this.config, 'name', 'UNKNOWN');
    const key = `${adapterName}.variables.${variableName}`;
    try {
      const data = JSON.parse(localStorage.getItem(key));
      // console.log({ key, data });
      if (!!data) {
        this.output.emit(clone(data));
      } else {
        this.output.emit(get(this.config, 'default'));
      }
    } catch (e) {
      this.errorMessage = e.message;
      this.hasError = true;
    }
  }
}
