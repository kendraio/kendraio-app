import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { clone, get, isObject } from 'lodash-es';
import { compile } from 'handlebars/dist/handlebars.js';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss'],
})
export class ImageBlockComponent implements OnInit, OnChanges {
  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  title = '';
  src = '';
  type = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.type = get(this.config, 'type', '');
    // this.title = compile(get(this.config, 'title', ''))({ context: this.context || {}, data: this.model, ...this.model || {} });
    this.src = compile(get(this.config, 'src', ''))({
      context: this.context || {},
      data: this.model,
      ...(this.model || {}),
    });
    this.output.emit(clone(this.model));
  }
}
