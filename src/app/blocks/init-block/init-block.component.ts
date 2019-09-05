import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {isArray, isObject} from 'lodash-es';

@Component({
  selector: 'app-init-block',
  templateUrl: './init-block.component.html',
  styleUrls: ['./init-block.component.scss']
})
export class InitBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
  }
}
