import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {clone, set, get} from 'lodash-es';

@Component({
  selector: 'app-load-auth-block',
  templateUrl: './load-auth-block.component.html',
  styleUrls: ['./load-auth-block.component.scss']
})
export class LoadAuthBlockComponent extends BaseBlockComponent {


  onData(data: any, firstChange: boolean) {
    const adapterName = get(this.context, 'app.adapterName', 'UNKNOWN');
    const workflowId = get(this.config, 'workflowId', 'UNKNOWN');
    const key = `connect__${adapterName}__${workflowId}`;
    const loadedAuth = JSON.parse(localStorage.getItem(key));
    if (loadedAuth) {
      const contextKey = `connect.${adapterName}.${workflowId}`;
      set(this.context, contextKey, loadedAuth);
    }
    this.output.emit(clone(this.model));
  }


}
