import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {get, has, isString} from 'lodash-es';
import {DocumentRepositoryService} from '../../services/document-repository.service';
import {ContextDataService} from '../../services/context-data.service';
import {search} from 'jmespath';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-query-block',
  templateUrl: './query-block.component.html',
  styleUrls: ['./query-block.component.scss']
})
export class QueryBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  hasError = false;
  errorMessage = '';

  debug = '';
  isLoading = false;

  constructor(
    private readonly http: HttpClient,
    private readonly docRepo: DocumentRepositoryService,
    private readonly contextData: ContextDataService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    // console.log({ changes });
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    this.updateQuery();
  }

  constructEndpointUrl(dataSource) {
    if (isString(get(dataSource, 'endpoint', ''))) {
      return dataSource.endpoint;
    }
    const endpoint = this.contextData.getFromContextWithModel(dataSource.endpoint, this.model);
    // console.log({ endpoint });
    const protocol = get(endpoint, 'protocol', 'https:');
    const host = get(endpoint, 'host', '');
    const pathname = get(endpoint, 'pathname', '/');
    const query = get(endpoint, 'query', []);
    const reduceQuery = _q => Object.keys(_q).map(key => `${key}=${_q[key]}`, []).join('&');
    return `${protocol}//${host}${pathname}?${reduceQuery(query)}`;
  }

  updateQuery() {
    this.hasError = false;
    this.isLoading = true;
    const { type, ...dataSource } = get(this.config, 'dataSource', { type: false });
    switch (type) {
      case 'local':
        const { schema } = dataSource;
        this.docRepo.listAllOfType(schema).subscribe(values => {
          // console.log({ values });
          this.sendOutput(values || []);
        });
        break;
      case 'remote':
        const endpoint = this.constructEndpointUrl(dataSource);
        this.debug = endpoint;
        let headers = new HttpHeaders();
        if (has(dataSource, 'authentication.type')) {
          switch (get(dataSource, 'authentication.type')) {
            case 'basic-auth':
              const valueGetters = get(dataSource, 'authentication.valueGetters', {});
              const context = { ...dataSource.authentication, ...this.contextData.getGlobalContext(valueGetters) };
              if (has(context, 'username') && has(context, 'password')) {
                const { username, password } = context;
                headers = headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
              }
              break;
            case 'bearer':
              break;
            default:
              console.log('Unknown authentication type');
          }
        }
        this.http.get<Array<any>>(endpoint, { headers })
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              // TODO: need to prevent errors for triggering subsequent blocks
              return of([]);
            })
          )
          .subscribe(values => {
            this.sendOutput(values);
          });
        break;
      default:
        this.hasError = true;
        this.errorMessage = 'Unknown data source type';
        this.sendOutput([]);
    }
  }

  sendOutput(result) {
    this.isLoading = false;
    this.output.emit({ ...this.model, result });
  }

}
