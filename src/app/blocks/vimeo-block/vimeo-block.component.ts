import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { clone, get, isObject } from 'lodash-es';
import { compile } from 'handlebars/dist/handlebars.js';
import { DomSanitizer } from '@angular/platform-browser';

// TODO: this is a cheap and cheerful solution needs work to make reusable, TD

@Component({
  selector: 'app-vimeo-block',
  templateUrl: './vimeo-block.component.html',
  styleUrls: ['./vimeo-block.component.scss'],
})
export class VimeoBlockComponent implements OnInit, OnChanges {
  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  title = '';
  src = '';
  vidSrc;
  type = '';

  constructor(protected _sanitizer: DomSanitizer) {}

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

    this.vidSrc = this.sanitise('https://player.vimeo.com/video/' + this.src);

    // this.vidSrc = this.src.replace('vimeo.com/', 'player.vimeo.com/video/');
  }

  sanitise(src) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(src);
  }
}
