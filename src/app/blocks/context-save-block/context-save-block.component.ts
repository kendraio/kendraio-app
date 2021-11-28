import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {clone, get, set} from 'lodash-es';
import * as uuid from 'uuid';
import {mappingUtility} from '../mapping-block/mapping-util';
import { SharedContextService } from 'src/app/services/shared-context.service';

@Component({
  selector: 'app-context-save-block',
  templateUrl: './context-save-block.component.html',
  styleUrls: ['./context-save-block.component.scss']
})
export class ContextSaveBlockComponent extends BaseBlockComponent {

  contextKey = 'saved';
  valueGetter = 'data';
  keyGetter = '';
  skipFirst = true;
  shared = false; // force to shared context
  
  constructor(private sharedContext:SharedContextService) {
    super()
  }


  onConfigUpdate(config: any) {
    this.contextKey = get(config, 'contextKey', 'saved');
    this.valueGetter = get(config, 'valueGetter', 'data');
    this.keyGetter = get(config, 'keyGetter', '');
    this.shared = get(config, 'shared', '');
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange && this.skipFirst) {
      return;
    }
    const value = mappingUtility({ data, context: this.context, shared: this.sharedContext._context }, this.valueGetter);
    let key = this.contextKey;
    if (this.keyGetter.length>0) {
      key = mappingUtility({ data, context: this.context, shared: this.sharedContext._context }, this.keyGetter);
    }
    if (key){
      if (key.startsWith('shared.') || this.shared) {        
        if (key.startsWith('shared.')) key = key.substr(7);
        this.sharedContext.setValue(key,value);
      }
      else {
        set(this.context, key, value);      
        this.context.__key = uuid.v4();
      }
    }
    this.output.emit(clone(data));    
  }


}
