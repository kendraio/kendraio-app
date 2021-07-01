import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {clone, get, set} from 'lodash-es';
import * as uuid from 'uuid';
import {mappingUtility} from '../mapping-block/mapping-util';

@Component({
  selector: 'app-context-save-block',
  templateUrl: './context-save-block.component.html',
  styleUrls: ['./context-save-block.component.scss']
})
export class ContextSaveBlockComponent extends BaseBlockComponent {

  contextKey = 'saved';
  valueGetter = 'data';

  onConfigUpdate(config: any) {
    this.contextKey = get(config, 'contextKey', 'saved');
    this.valueGetter = get(config, 'valueGetter', 'data');
  }

  onData(data: any, firstChange: boolean) {
    const value = mappingUtility({ data, context: this.context }, this.valueGetter);
    set(this.context, this.contextKey, value);
    this.context.__key = uuid.v4();
    this.output.emit(clone(data));
  }


}
