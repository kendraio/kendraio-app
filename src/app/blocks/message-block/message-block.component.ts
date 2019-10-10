import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {get, isArray, isObject} from 'lodash-es';
import { compile } from 'handlebars';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss']
})
export class MessageBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  title = '';
  message = '';
  type = '';

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.type = get(this.config, 'type', '');
    this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, ...this.model || {} });
    this.message = compile(get(this.config, 'message', ''))({ context: this.context || {}, ...this.model || {} });
    this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
  }
}
