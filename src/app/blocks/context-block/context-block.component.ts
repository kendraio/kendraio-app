import {Component, NgZone} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {clone, get, set} from 'lodash-es';

@Component({
  selector: 'app-context-block',
  templateUrl: './context-block.component.html',
  styleUrls: ['./context-block.component.scss']
})
export class ContextBlockComponent extends BaseBlockComponent {

  blocks = [];
  contextModels = [];
  models = [];
  newContext = {};
  contextPath = 'temp';
  contextBlocks = [];
  contextOutput;
  gotContextValue = false;
  skipFirst = false;

  constructor(
    private readonly zone: NgZone
  ) {
    super();
    this.newContext = this.context;
  }

  onConfigUpdate(config: any) {
    this.blocks = get(config, 'blocks', []);
    this.skipFirst = get(config, 'skipFirst', false);
    this.contextPath = get(config, 'contextPath', 'temp');
    this.contextBlocks = get(config, 'contextBlocks', []);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }

  onData(data: any, firstChange: boolean) {
    if (this.skipFirst && firstChange) {
      return;
    }
    // console.log('context data', data, firstChange, this.gotContextValue);
    if (this.gotContextValue) {
      this.models = [clone(this.model)];
    } else {
      this.contextModels = [clone(this.model)];
    }
    // // if (firstChange) {
    //   setTimeout(() => {
    //     this.zone.run(() => {
    //       this.contextModels = [clone(this.model)];
    //     });
    //   }, 0);
    // // }
    this.newContext = clone(this.context);
    // TODO: for security make sure this doesn't allow override app context!
    if (!this.contextPath.startsWith('app')) {
      set(this.newContext, this.contextPath, this.contextOutput);
    }
  }

  onContextComplete(value) {
    this.contextOutput = value;
    setTimeout(() => {
      this.zone.run(() => {
        set(this.newContext, this.contextPath, this.contextOutput);
        this.gotContextValue = true;
        this.models = [clone(this.model)];
      });
    }, 0);
  }

  onWorkflowComplete(value) {
    this.output.emit(value);
  }
}
