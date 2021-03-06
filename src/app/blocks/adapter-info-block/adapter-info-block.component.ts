import { Component } from '@angular/core';
import {LocalDatabaseService} from '../../services/local-database.service';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';

@Component({
  selector: 'app-adapter-info-block',
  templateUrl: './adapter-info-block.component.html',
  styleUrls: ['./adapter-info-block.component.scss']
})
export class AdapterInfoBlockComponent extends BaseBlockComponent {

  hasError = false;
  errorMessage = '';
  isLoading = false;

  adapterName;
  adapterNameGetter;

  constructor(
    private readonly localData: LocalDatabaseService
  ) {
    super();
  }

  onConfigUpdate(config: any) {
    this.adapterName = get(config, 'adapterName');
    this.adapterNameGetter = get(config, 'adapterNameGetter');
  }

  onData(data: any, firstChange: boolean) {
    if (this.adapterNameGetter) {
      this.adapterName = mappingUtility({ data: this.model, context: this.context }, this.adapterNameGetter);
    }
    if (!this.adapterName) {
      this.hasError = true;
      this.errorMessage = 'No adapterName provided in adapter info block';
      return;
    }

    this.hasError = false;
    this.isLoading = true;
    this.localData['adapters'].get({ adapterName: this.adapterName })
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
