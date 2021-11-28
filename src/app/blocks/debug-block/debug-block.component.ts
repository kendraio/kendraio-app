import {Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import JSONFormatter from 'json-formatter-js';
import {clone, get, isArray, isObject} from 'lodash-es';
import { SharedContextService } from 'src/app/services/shared-context.service';
@Component({
  selector: 'app-debug-block',
  templateUrl: './debug-block.component.html',
  styleUrls: ['./debug-block.component.scss']
})
export class DebugBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @ViewChild('modelOutput') modelOutput: ElementRef;

  @Output() output = new EventEmitter();

  open = 1;
  showContext = false;
  consoleLog = false;
  consoleLabel = 'debug block';

  constructor(
    private readonly zone: NgZone,
    private sharedContext:SharedContextService
  ) { }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.open = get(this.config, 'open', 1);
    this.showContext = get(this.config, 'showContext', false);
    this.consoleLog = get(this.config, 'consoleLog', false);
    this.consoleLabel = get(this.config, 'consoleLabel', 'debug block');
    this.updateOutputDisplay();
    this.output.emit(clone(this.model));
  }

  updateOutputDisplay() {
    setTimeout(() => {
      this.zone.run(() => {
        if (!!this.modelOutput) {
          // Replace #modelOutput DIV contents with formatted JSON
          const debugData = this.showContext ? { data: this.model, context: this.context, shared: this.sharedContext._context } : this.model;
          const formatter = new JSONFormatter(debugData, this.open);
          while (this.modelOutput.nativeElement.firstChild) {
            this.modelOutput.nativeElement.removeChild(this.modelOutput.nativeElement.firstChild);
          }
          this.modelOutput.nativeElement.append(formatter.render());
          if (this.consoleLog) {
            console.log(this.consoleLabel, this.model, this.context);
          }
        } else {
          console.log('Debug output DIV not available', this.model);
        }
      });
    }, 40);
  }
}
