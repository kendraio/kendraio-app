import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, get} from 'lodash-es';
import { compile } from 'handlebars/dist/handlebars.js';
import DOMPurify from './dom-sanitiser';

@Component({
  selector: 'app-template-block',
  templateUrl: './template-block.component.html',
  styleUrls: ['./template-block.component.scss']
})
export class TemplateBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  innerHtml = '';

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    // TODO: Allow loading template from Adapter
    this.innerHtml = DOMPurify.sanitize(
      compile(get(this.config, 'template', ''))({ context: this.context, data: this.model })
    );
    this.output.emit(clone(this.model));
  }
}
