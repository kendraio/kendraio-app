import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, isArray, isObject} from 'lodash-es';
import {compile} from 'handlebars';

@Component({
  selector: 'app-template-block',
  templateUrl: './template-block.component.html',
  styleUrls: ['./template-block.component.scss']
})
export class TemplateBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  innerHtml = '';

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    // TODO: Allow loading template from Adapter
    this.innerHtml = compile(get(this.config, 'template', ''))(this.model);
    this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
  }
}
