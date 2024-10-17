import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { clone, every, get, isArray, isObject } from 'lodash-es';

@Component({
  selector: 'app-batch-block',
  templateUrl: './batch-block.component.html',
  styleUrls: ['./batch-block.component.scss'],
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

  @HostBinding('class.batch-block-flex')
  flex: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.hasError = false;
    this.flex = get(this.config, 'flex', false);
    this.blocks = get(this.config, 'blocks', []);
    // FORCE the model to be an array
    this.modelList = isArray(this.model)
      ? this.model
      : isObject(this.model)
        ? Object.keys(this.model)
        : [];
    this.completed = this.modelList.map((_) => false);
    this.results = this.modelList.map((_) => ({}));
  }

  onWorkflowComplete(i, event) {
    this.completed[i] = true;
    this.results[i] = event;
    if (every(this.completed)) {
      this.output.emit(clone(this.results));
    }
  }
}
