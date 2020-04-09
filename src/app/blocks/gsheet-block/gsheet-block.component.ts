import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import * as Tabletop from './tabletop';

@Component({
  selector: 'app-gsheet-block',
  templateUrl: './gsheet-block.component.html',
  styleUrls: ['./gsheet-block.component.scss']
})
export class GsheetBlockComponent extends BaseBlockComponent {

  key = '';
  simple = false;

  hasError = false;
  errorMessage = '';
  isLoading = false;

  onConfigUpdate(config: any) {
    this.key = get(config, 'key', '');
    this.simple = get(config, 'simple', '');
  }

  onData(data: any, firstChange: boolean) {
    this.isLoading = true;
    this.hasError = false;
    Tabletop.init({key: this.key, simpleSheet: this.simple})
      .then(values => {
        this.output.emit(values);
        this.isLoading = false;
      }).catch(err => {
        this.hasError = true;
        this.errorMessage = err.message;
      });
  }
}
