import {Component, NgZone, OnInit} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {clone, get, set} from 'lodash-es';

@Component({
  selector: 'app-context-block',
  templateUrl: './context-block.component.html',
  styleUrls: ['./context-block.component.scss']
})
export class ContextBlockComponent extends BaseBlockComponent {

  blocks = [];
  models = [];
  newContext = {};
  contextPath = 'temp';
  contextBlocks = [];
  contextOutput;
  gotContextValue = false;

  constructor(
    private readonly zone: NgZone
  ) {
    super();
    this.newContext = this.context;
  }

  onConfigUpdate(config: any) {
    this.blocks = get(config, 'blocks', []);
    // TODO: for security make sure this doesn't allow override app context!
    this.contextPath = get(config, 'contextPath', 'temp');
    this.contextBlocks = get(config, 'contextBlocks', []);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange) {
      setTimeout(() => {
        this.zone.run(() => {
          this.models = [clone(this.model)];
        });
      }, 0);
    }
    this.newContext = clone(this.context);
    set(this.newContext, this.contextPath, this.contextOutput);
  }

  onContextComplete(value) {
    this.contextOutput = value;
    set(this.newContext, this.contextPath, this.contextOutput);
    setTimeout(() => {
      this.zone.run(() => {
        this.gotContextValue = true;
        this.models = [clone(this.model)];
      });
    }, 0);
  }

  onWorkflowComplete(value) {
    this.output.emit(value);
  }
}
