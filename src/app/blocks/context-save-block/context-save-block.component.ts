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
  keyGetter = '';

  onConfigUpdate(config: any) {
    this.contextKey = get(config, 'contextKey', 'saved');
    this.valueGetter = get(config, 'valueGetter', 'data');
    this.keyGetter = get(config, 'keyGetter', '');
  }

  onData(data: any, firstChange: boolean) {
    const value = mappingUtility({ data, context: this.context }, this.valueGetter);
    let key = this.contextKey;
    if (this.keyGetter.length>0) {
      key = mappingUtility({ data, context: this.context }, this.keyGetter);
    }
    if (key){
      set(this.context, key, value);
      this.context.__key = uuid.v4();
    }
    this.output.emit(clone(data));    
  }


}
