import { Component } from '@angular/core';
import {LocalDatabaseService} from '../../services/local-database.service';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {get} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';
import { AdapterInstallService } from 'src/app/services/adapter-install.service';
import { GridColumnStyleBuilder } from '@angular/flex-layout';

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

  compileAdapter = false; 

  constructor(
    private readonly localData: LocalDatabaseService,
    private readonly adapterInstallService: AdapterInstallService
  ) {
    super();
  }

  onConfigUpdate(config: any) {
    this.adapterName = get(config, 'adapterName');
    this.adapterNameGetter = get(config, 'adapterNameGetter');
    this.compileAdapter = get(config, 'compileAdapter', false);
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
      .then(adapterData => {
        if (this.compileAdapter) {
          this.adapterInstallService.compileAdapter(adapterData).then((compiledAdapter) => {
            console.log(compiledAdapter);
            this.isLoading = false;
            this.output.emit(compiledAdapter);
          });
        } else {
          this.isLoading = false;
          this.output.emit(adapterData);
        }
      })
      .catch(err => {
        this.hasError = true;
        this.isLoading = false;
        this.errorMessage = err.message;
      });
  }
}
