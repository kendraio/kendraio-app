import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-multi-block',
  templateUrl: './multi-block.component.html',
  styleUrls: ['./multi-block.component.scss']
})
export class MultiBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  batches = [];
  modelStacks = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.batches = get(this.config, 'batches', []);
    this.modelStacks = this.batches.map(batch => {
      const batchBlocks = get(batch, 'blocks', []);
      const batchModels = batchBlocks.map(blockDef => get(blockDef, 'defaultValue', {}));
      batchModels.push({});
      return batchModels;
    });
  }

  // TODO: emit output when all blocks in batch have emitted

}
