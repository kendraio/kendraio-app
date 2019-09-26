import {Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, every, get} from 'lodash-es';

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

  results = [];
  completed = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.batches = get(this.config, 'batches', []);
    this.modelStacks = this.batches.map(batch => {
      // const batchBlocks = get(batch, 'blocks', []);
      // const batchModels = batchBlocks.map(blockDef => get(blockDef, 'defaultValue', {}));
      // batchModels.push({});
      // return batchModels;
      return [clone(this.model)];
    });
    this.results = this.modelStacks.map(_ => ({}));
    this.completed = this.modelStacks.map(_ => false);
  }

  onWorkflowComplete(i, event) {
    this.completed[i] = true;
    this.results[i] = event;
    if (every(this.completed)) {
      this.output.emit(clone(this.results));
    }
  }

}
