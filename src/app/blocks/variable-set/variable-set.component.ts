import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get, isObject} from 'lodash-es';
import stringify from 'json-stringify-safe';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AppSettingsService} from '../../services/app-settings.service';
import {mappingUtility} from '../mapping-block/mapping-util';

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
  showNotify = true;
  nameGetter;
  valueGetter;

  constructor(
    private readonly notify: MatSnackBar,
    private readonly settings: AppSettingsService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.showNotify = get(this.config, 'notify', true);
    this.nameGetter = get(this.config, 'nameGetter');
    this.valueGetter = get(this.config, 'valueGetter');    
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    if (!this.model || (isObject(this.model) && Object.keys(this.model).length === 0)) {
      return;
    }
    const adapterName = get(this.context, 'app.adapterName', 'UNKNOWN');
    const variableName = get(this.config, 'name', 'UNKNOWN');
    let savedVariableName = `${adapterName}.variables.${variableName}`;
    if (this.nameGetter) {
      // console.log(this.nameGetter, this.model, this.context);
      savedVariableName = mappingUtility({ data: this.model, context: this.context }, this.nameGetter);
    }
    const data = this.valueGetter
      ? mappingUtility({ data: this.model, context: this.context }, this.valueGetter)
      : stringify(this.model);
    localStorage.setItem(savedVariableName, data);
    if (this.showNotify) {
      const message = `${variableName} update successful`;
      this.notify.open(message, 'OK', {
        duration: 4000,
        verticalPosition: 'top'
      });
    }
    this.output.emit(clone(this.model));

    if (get(this.context, 'app.adapterName') === 'core') {
      this.settings.settingsUpdated$.next();
    }
  }

}
