import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, isArray} from 'lodash-es';

@Component({
  selector: 'app-batch-block',
  templateUrl: './batch-block.component.html',
  styleUrls: ['./batch-block.component.scss']
})
export class BatchBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  blocks = [];
  modelList = [];

  hasError = false;
  errorMessage = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (!isArray(this.model)) {
      this.errorMessage = 'Batch block expects an array';
      this.modelList = [];
      this.hasError = true;
      return;
    }
    this.blocks = get(this.config, 'blocks', []);
    this.modelList = this.model;
  }

  // TODO: emit output when all blocks in batch have emitted

}
