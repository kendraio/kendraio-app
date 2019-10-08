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

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    // console.log({ changes });
    this.onConfigUpdate(this.config);
    this.onData(this.model, get(changes, 'model.firstChange', false));
  }

  onConfigUpdate(config: any) {
  }

  onData(data: any, firstChange: boolean) {
  }
}
