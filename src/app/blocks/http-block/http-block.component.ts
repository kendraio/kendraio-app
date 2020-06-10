import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, has, includes, isString, toLower, toUpper} from 'lodash-es';
import {ContextDataService} from '../../services/context-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {mappingUtility} from '../mapping-block/mapping-util';

@Component({
  selector: 'app-http-block',
  templateUrl: './http-block.component.html',
  styleUrls: ['./http-block.component.scss']
})
export class HttpBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  responseType: 'json' = 'json';

  hasError = false;
  errorMessage = '';

  errorData = {};
  errorBlocks = [];

  isLoading = false;

  contextErrorKey = null;
  contextErrors = '';
  prevContextKey = '';

  constructor(
    private readonly contextData: ContextDataService,
    private readonly notify: MatSnackBar,
    private readonly http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    const keyChanges = Object.keys(changes);
    this.contextErrorKey = get(this.config, 'contextErrorKey', null);
    if (this.context.__key !== this.prevContextKey) {
      // context has changed
      this.prevContextKey = this.context.__key;
      // update errors from context if used
      if (this.contextErrorKey) {
        this.contextErrors = mappingUtility(this.context, this.contextErrorKey) || '';
      }
      if (keyChanges.length === 1 && keyChanges.includes('context')) {
        // exit if only the context was changed
        return;
      }
    }
    if (get(this.config, 'skipInit', true) && get(changes, 'model.firstChange', false)) {
      return;
    }
    this.responseType = get(this.config, 'responseType', 'json');
    this.errorBlocks = get(this.config, 'onError.blocks', []);
    this.makeRequest();
  }

  makeRequest() {
    this.hasError = false;
    this.isLoading = true;
    const method = get(this.config, 'method');
    if (!method) {
      this.errorMessage = 'No HTTP method provided';
      this.errorData = {};
      this.errorBlocks = [];
      this.hasError = true;
      this.isLoading = false;
      return;
    }
    if (!includes(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], toUpper(method))) {
      this.errorMessage = 'HTTP method not supported';
      this.errorData = {};
      this.errorBlocks = [];
      this.hasError = true;
      this.isLoading = false;
      return;
    }
    const url = this.constructEndpointUrl(this.config);
    // console.log({ url });

    let headers = new HttpHeaders(this.getPayloadHeaders());
    if (has(this.config, 'authentication.type')) {
      const valueGetters = get(this.config, 'authentication.valueGetters', {});
      const context = {...this.config.authentication, ...this.contextData.getGlobalContext(valueGetters, this.context, this.model)};
      switch (get(this.config, 'authentication.type')) {
        case 'basic-auth':
          if (has(context, 'username') && has(context, 'password')) {
            const {username, password} = context;
            headers = headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
          }
          break;
        case 'bearer':
          if (has(context, 'jwt')) {
            const {jwt} = context;
            headers = headers.append('Authorization', `Bearer ${jwt}`);
          }
          break;
        default:
          console.log('Unknown authentication type');
      }
    }

    // TODO: decide what to do with response when error condition
    switch (toUpper(method)) {
      case 'GET':
        this.http.get(url, {headers, responseType: this.responseType})
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              this.errorData = error;
              // TODO: need to prevent errors for triggering subsequent blocks
              return of([]);
            })
          )
          .subscribe(response => {
            this.isLoading = false;
            this.hasError = false;
            this.outputResult(response);
          });
        break;
      case 'DELETE':
        this.http.delete(url, {headers, responseType: this.responseType})
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              this.errorData = error;
              // TODO: need to prevent errors for triggering subsequent blocks
              return of([]);
            })
          )
          .subscribe(response => {
            this.isLoading = false;
            this.hasError = false;
            this.outputResult(response);
          });
        break;
      case 'PUT':
      case 'POST':
      case 'PATCH':
        const isEmptyObject = obj => (obj instanceof Object && Object.keys(obj).length === 0);
        const payload = this.getPayload();
        if (isEmptyObject(payload)) {
          this.isLoading = false;
          this.hasError = true;
          this.errorMessage = `${toUpper(method)} of empty payload prevented in http block`;
          this.errorData = {};
          this.errorBlocks = [];

          return;
        }
        const sub = (toUpper(method) === 'PUT')
          ? this.http.put(url, payload, {headers, responseType: this.responseType})
          : (toUpper(method) === 'PATCH') ?
            this.http.patch(url, payload, {headers, responseType: this.responseType})
            : this.http.post(url, payload, {headers, responseType: this.responseType});
        sub
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              this.errorData = error;
              // TODO: need to prevent errors for triggering subsequent blocks
              return of([]);
            })
          )
          .subscribe(response => {
            this.isLoading = false;
            this.hasError = false;
            this.outputResult(response);
            const notify = get(this.config, 'notify', true);
            if (notify) {
              const message = 'API update successful';
              this.notify.open(message, 'OK', {
                duration: 2000,
                verticalPosition: 'top'
              });
            }
          });
        break;

    }

  }

  outputResult(data) {
    this.output.emit(data);
  }

  getPayloadHeaders() {
    const headers = get(this.config, 'headers', {});
    return Object.keys(headers).reduce((a, key) => {
      a[key] = mappingUtility({data: this.model, context: this.context}, headers[key]);
      return a;
    }, {});
  }

  getPayload() {
    const payloadMapping = get(this.config, 'payload');
    if (payloadMapping) {
      return mappingUtility({data: this.model, context: this.context}, payloadMapping);
    }
    return this.model;
  }

  constructEndpointUrl(config) {
    if (isString(get(config, 'endpoint', ''))) {
      return config.endpoint;
    }
    const endpoint = this.contextData.getFromContextWithModel(config.endpoint, this.model, this.context);
    if (isString(endpoint)) {
      return endpoint;
    }
    const protocol = get(endpoint, 'protocol', 'https:');
    const host = get(endpoint, 'host', '');
    const pathname = get(endpoint, 'pathname', '/');
    const query = get(endpoint, 'query', []);
    const reduceQuery = _q => Object.keys(_q).map(key => `${key}=${_q[key]}`, []).join('&');
    return `${protocol}//${host}${pathname}?${reduceQuery(query)}`;
  }
}
