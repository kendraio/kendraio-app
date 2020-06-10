import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-base-block',
  templateUrl: './base-block.component.html',
  styleUrls: ['./base-block.component.scss']
})
export class BaseBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    const keyChanges = Object.keys(changes);
    if (keyChanges.includes('context')) {
      this.onContextUpdate(this.context, get(changes, 'context.firstChange', false));
    }
    if (keyChanges.includes('config')) {
      this.onConfigUpdate(this.config);
    }
    if (keyChanges.includes('model')) {
      this.onData(this.model, get(changes, 'model.firstChange', false));
    }
  }

  onConfigUpdate(config: any) {
  }

  onContextUpdate(context: any, firstChange: boolean) {

  }

  onData(data: any, firstChange: boolean) {
  }
}
