import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, every, get, isArray} from 'lodash-es';

@Component({
  selector: 'app-batch-block',
  templateUrl: './batch-block.component.html',
  styleUrls: ['./batch-block.component.scss']
})
export class BatchBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = [];

  @Output() output = new EventEmitter();

  blocks = [];
  modelList = [];

  results = [];
  completed = [];

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
    this.completed = this.model.map(_ => false);
    this.results = this.model.map(_ => ({}));
  }

  onWorkflowComplete(i, event) {
    this.completed[i] = true;
    this.results[i] = event;
    if (every(this.completed)) {
      this.output.emit(clone(this.results));
    }
  }

}
