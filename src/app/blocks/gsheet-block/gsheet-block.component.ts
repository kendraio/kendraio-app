import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import {parse} from 'papaparse';

@Component({
  selector: 'app-gsheet-block',
  templateUrl: './gsheet-block.component.html',
  styleUrls: ['./gsheet-block.component.scss']
})
export class GsheetBlockComponent extends BaseBlockComponent {

  shareUrl = '';
  key = '';
  simple = false;

  hasError = false;
  errorMessage = '';
  isLoading = false;

  onConfigUpdate(config: any) {
    //this.key = get(config, 'key', '');
    //this.simple = get(config, 'simple', '');
    this.shareUrl = get(config, 'shareUrl');
  }

  onData(data: any, firstChange: boolean) {
    this.isLoading = true;
    this.hasError = false;
    parse(this.shareUrl, {
      download: true,
      header: true,
      complete: (results) => {
        this.output.emit(results.data);
        this.isLoading = false;
      },
      error: (error, file) => {
        this.hasError = true;
        this.errorMessage = error.message;
      }
    });
  }
}
