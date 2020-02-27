import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {LocalDatabaseService} from '../../services/local-database.service';

@Component({
  selector: 'app-adapter-list-block',
  templateUrl: './adapter-list-block.component.html',
  styleUrls: ['./adapter-list-block.component.scss']
})
export class AdapterListBlockComponent extends BaseBlockComponent {

  hasError = false;
  errorMessage = '';
  isLoading = false;

  constructor(
    private readonly localData: LocalDatabaseService
  ) {
    super();
  }

  onData(data: any, firstChange: boolean) {
    this.hasError = false;
    this.isLoading = true;
    this.localData['adapters'].toArray()
      .then(value => {
        this.isLoading = false;
        this.output.emit(value);
      })
      .catch(err => {
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = err.message;
      });
  }
}
