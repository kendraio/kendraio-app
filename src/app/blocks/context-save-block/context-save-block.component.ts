import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {clone, get, set} from 'lodash-es';
import v4 from 'uuid/v4';

@Component({
  selector: 'app-context-save-block',
  templateUrl: './context-save-block.component.html',
  styleUrls: ['./context-save-block.component.scss']
})
export class ContextSaveBlockComponent extends BaseBlockComponent {

  contextKey = 'saved';

  onConfigUpdate(config: any) {
    this.contextKey = get(config, 'contextKey', 'saved');
  }

  onData(data: any, firstChange: boolean) {
    set(this.context, this.contextKey, data);
    this.context.__key = v4();
    this.output.emit(clone(data));
  }


}
