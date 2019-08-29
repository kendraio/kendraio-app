import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import JSONFormatter from 'json-formatter-js';
import {isArray, isObject} from 'lodash-es';

@Component({
  selector: 'app-debug-block',
  templateUrl: './debug-block.component.html',
  styleUrls: ['./debug-block.component.scss']
})
export class DebugBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};
  @ViewChild('modelOutput', {static: false}) modelOutput: ElementRef;

  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.updateOutputDisplay();
    this.output.emit(isArray(this.model) ? [ ...this.model ] : isObject(this.model) ? { ...this.model } : this.model);
  }

  updateOutputDisplay() {
    if (!!this.modelOutput) {
      // Replace #modelOutput DIV contents with formatted JSON
      const formatter = new JSONFormatter(this.model, 0);
      while (this.modelOutput.nativeElement.firstChild) {
        this.modelOutput.nativeElement.removeChild(this.modelOutput.nativeElement.firstChild);
      }
      this.modelOutput.nativeElement.append(formatter.render());
    }
  }
}
