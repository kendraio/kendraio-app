import { Component } from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {HttpClient} from '@angular/common/http';
import { get, isObject } from 'lodash';
import {mappingUtility} from '../mapping-block/mapping-util';

@Component({
  selector: 'app-graphql-block',
  templateUrl: './graphql-block.component.html',
  styleUrls: ['./graphql-block.component.scss']
})
export class GraphqlBlockComponent extends BaseBlockComponent {

  endpoint = '';
  variableGetters = {};
  query = '';

  hasError = false;
  errorMessage = '';
  isLoading = false;

  constructor(private readonly http: HttpClient) {
    super();
  }

  onConfigUpdate(config: any) {
    this.endpoint = get(config, 'endpoint', '');
    this.variableGetters = get(config, 'variables', {});
    this.query = get(config, 'query', '');
  }

  onData(data: any, firstChange: boolean) {
    if (firstChange) {
      return;
    }
    const allowEmpty = get(this.config, 'allowEmpty', false);
    if (!isObject(data) && !allowEmpty) {
      return;
    }
    if (Object.keys(data).length === 0 && !allowEmpty) {
      return;
    }

    const payload = {
      query: this.query,
      variables: Object.keys(this.variableGetters).reduce((a, key) => {
        a[key] = mappingUtility({ data, context: this.context }, this.variableGetters[key]);
        return a;
      }, {})
    };

    this.hasError = false;
    this.isLoading = true;
    this.http.post(this.endpoint, payload)
      .subscribe(result => {
        this.isLoading = false;
        this.output.emit(result);
      }, error => {
        this.hasError = true;
        this.errorMessage = error.message;
      });
  }
}
