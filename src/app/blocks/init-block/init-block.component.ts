import {Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {isArray, isObject} from 'lodash-es';

// TODO: deprecate init block and replace with option on the workflow

@Component({
  selector: 'app-init-block',
  templateUrl: './init-block.component.html',
  styleUrls: ['./init-block.component.scss']
})
export class InitBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  constructor(
    private readonly zone: NgZone
  ) { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    setTimeout(() => {
      this.zone.run(() => {
        this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
      });
    }, 400);
  }
}
