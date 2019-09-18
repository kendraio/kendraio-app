import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {get} from 'lodash-es';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  blocks = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.blocks = get(this.config, 'blocks', []);
  }

  onWorkflowComplete(event) {
    this.output.emit(event);
  }
}
