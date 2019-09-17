import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {get, has, includes, isString, toLower, toUpper} from 'lodash-es';
import {ContextDataService} from '../../services/context-data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

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

  hasError = false;
  errorMessage = '';

  isLoading = false;

  constructor(
    private readonly contextData: ContextDataService,
    private readonly notify: MatSnackBar,
    private readonly http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    this.makeRequest();
  }

  makeRequest() {
    this.hasError = false;
    this.isLoading = true;
    const method = get(this.config, 'method');
    if (!method) {
      this.errorMessage = 'No HTTP method provided';
      this.hasError = true;
      this.isLoading = false;
      return;
    }
    if (!includes(['GET', 'POST', 'PUT'], toUpper(method))) {
      this.errorMessage = 'HTTP method not supported';
      this.hasError = true;
      this.isLoading = false;
      return;
    }
    const url = this.constructEndpointUrl(this.config);

    let headers = new HttpHeaders();
    if (has(this.config, 'authentication.type')) {
      const valueGetters = get(this.config, 'authentication.valueGetters', {});
      const context = {...this.config.authentication, ...this.contextData.getGlobalContext(valueGetters)};
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

    // TODO: error handling - display error message
    // TODO: decide what to do with response when error condition
    switch (toUpper(method)) {
      case 'GET':
        this.http.get(url, {headers})
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              // TODO: need to prevent errors for triggering subsequent blocks
              return of([]);
            })
          )
          .subscribe(response => {
            this.isLoading = false;
            this.outputResult(response);
          });
        break;
      case 'PUT':
      case 'POST':
        const sub = (toUpper(method) === 'PUT')
          ? this.http.put(url, this.model, {headers})
          : this.http.post(url, this.model, {headers});
        sub
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              // TODO: need to prevent errors for triggering subsequent blocks
              return of([]);
            })
          )
          .subscribe(response => {
            this.isLoading = false;
            this.outputResult(response);
            const message = 'API update successful';
            this.notify.open(message, 'OK', {
              duration: 4000,
              verticalPosition: 'top'
            });
          });
        break;
    }

  }

  outputResult(data) {
    this.output.emit(data);
  }

  // TODO: Refactor to remove duplicate code - move this to service
  constructEndpointUrl(config) {
    if (isString(get(config, 'endpoint', ''))) {
      return config.endpoint;
    }
    const endpoint = this.contextData.getFromContextWithModel(config.endpoint, this.model);
    const protocol = get(endpoint, 'protocol', 'https:');
    const host = get(endpoint, 'host', '');
    const pathname = get(endpoint, 'pathname', '/');
    const query = get(endpoint, 'query', []);
    const reduceQuery = _q => Object.keys(_q).map(key => `${key}=${_q[key]}`, []).join('&');
    return `${protocol}//${host}${pathname}?${reduceQuery(query)}`;
  }
}
