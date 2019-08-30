import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, includes, isString, toLower, toUpper} from 'lodash-es';
import {ContextDataService} from '../../services/context-data.service';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-http-block',
  templateUrl: './http-block.component.html',
  styleUrls: ['./http-block.component.scss']
})
export class HttpBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  hasError = false;
  errorMessage = '';

  constructor(
    private readonly contextData: ContextDataService,
    private readonly notify: MatSnackBar,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log({ changes });
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    this.makeRequest();
  }

  makeRequest() {
    this.hasError = false;
    const method = get(this.config, 'method');
    if (!method) {
      this.errorMessage = 'No HTTP method provided';
      this.hasError = true;
      return;
    }
    if (!includes(['GET', 'POST', 'PUT'], toUpper(method))) {
      this.errorMessage = 'HTTP method not supported';
      this.hasError = true;
      return;
    }
    const url = this.constructEndpointUrl(this.config);
    console.log(get(this.config, 'endpoint'));
    console.log({ url });
    switch (toUpper(method)) {
      case 'GET':
        this.http.get(url);
        break;
      case 'PUT':
      case 'POST':
        const sub = (toUpper(method) === 'PUT')
          ? this.http.put(url, this.model)
          : this.http.post(url, this.model);
        sub.subscribe(v => {
          console.log({ v });
          const message = 'API update successful';
          this.notify.open(message, 'OK', {
            duration: 4000,
            verticalPosition: 'top'
          });
        });
        break;
    }

  }

  constructEndpointUrl(config) {
    if (isString(get(config, 'endpoint', ''))) {
      return config.endpoint;
    }
    const endpoint = this.contextData.getFromContextWithModel(config.endpoint, this.model);
    console.log({ endpoint });
    const protocol = get(endpoint, 'protocol', 'https:');
    const host = get(endpoint, 'host', '');
    const pathname = get(endpoint, 'pathname', '/');
    const query = get(endpoint, 'query', []);
    const reduceQuery = _q => Object.keys(_q).map(key => `${key}=${_q[key]}`, []).join('&');
    return `${protocol}//${host}${pathname}?${reduceQuery(query)}`;
  }
}
