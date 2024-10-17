/**
 * DEPRECATED
 * All functionality has been moved to the blocks builder
 */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EDITOR_OPTIONS } from './editor-options';
import JSONFormatter from 'json-formatter-js';
import { get, has, isString } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { AdapterQuerySelectDialogComponent } from '../../dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component';
import { ShareLinkGeneratorService } from '../../services/share-link-generator.service';
import { search } from 'jmespath';
import { DocumentRepositoryService } from '../../services/document-repository.service';
import { QUERY_SCHEMA } from './query.schema';
import { map, tap } from 'rxjs/operators';
import { ContextDataService } from '../../services/context-data.service';

@Component({
  selector: 'app-query-builder-page',
  templateUrl: './query-builder-page.component.html',
  styleUrls: ['./query-builder-page.component.scss'],
})
export class QueryBuilderPageComponent implements OnInit, AfterViewInit {
  showFormConfig = false;
  title = '';
  description = '';

  editorOptions = EDITOR_OPTIONS;

  queryModelText = JSON.stringify({}, null, 4);
  queryModel;

  output;
  @ViewChild('modelOutput') modelOutput: ElementRef;
  showMappingResult = false;
  @ViewChild('mappingOutput') mappingOutput: ElementRef;

  @ViewChild('gridAngular') gridAngular;

  defaultColDef = {
    resizable: true,
  };
  columnDefs = [];
  outputMapping = '';

  outputType = 'grid';
  outputConfig;

  _rowData = new BehaviorSubject<Array<any>>([]);
  rowData = this._rowData.pipe(
    map((values) => {
      if (!!this.outputMapping && this.outputMapping.length > 0) {
        try {
          const mappingResult = search(values, this.outputMapping);
          this.updateMappingResult(mappingResult);
          setTimeout(() => (this.showMappingResult = true), 0);
          return mappingResult;
        } catch (e) {
          console.log('JMESPath Error', e.message);
        }
      }
      setTimeout(() => (this.showMappingResult = false), 0);
      return values;
    }),
    tap(() => {
      if (!!this.gridAngular) {
        this.gridAngular.api.sizeColumnsToFit();
      }
    })
  );

  hasError = false;
  errorMessage = '';

  constructor(
    private readonly http: HttpClient,
    private shareLinks: ShareLinkGeneratorService,
    private readonly dialog: MatDialog,
    private readonly docRepo: DocumentRepositoryService,
    private readonly contextData: ContextDataService
  ) {}

  ngOnInit() {
    const urlData = this.shareLinks.getData();
    if (urlData) {
      const { Q } = urlData;
      this.queryModelText = JSON.stringify(Q, null, 4);
      this.queryModel = {
        value: this.queryModelText,
        language: 'json',
        uri: 'a:queryModel.json',
      };
    }
    this.runQuery();
  }

  ngAfterViewInit() {
    this.updateOutputDisplay();
  }

  initEditor() {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          fileMatch: ['a:queryModel.json'],
          uri: 'https://app.kendra.io/v0/query-schema',
          schema: QUERY_SCHEMA,
        },
      ],
    });
  }

  constructEndpointUrl(dataSource) {
    if (isString(get(dataSource, 'endpoint', ''))) {
      return dataSource.endpoint;
    }
    const demoModel = {};
    const endpoint = this.contextData.getFromContextWithModel(
      dataSource.endpoint,
      demoModel
    );
    // console.log({ endpoint });
    const protocol = get(endpoint, 'protocol', 'https:');
    const host = get(endpoint, 'host', '');
    const pathname = get(endpoint, 'pathname', '/');
    const query = get(endpoint, 'query', []);
    const reduceQuery = (_q) =>
      Object.keys(_q)
        .map((key) => `${key}=${_q[key]}`, [])
        .join('&');
    return `${protocol}//${host}${pathname}?${reduceQuery(query)}`;
  }

  runQuery() {
    this.hasError = false;
    try {
      // Parse and validate model
      const query = JSON.parse(this.queryModelText);
      this.outputConfig = get(query, 'output');
      this.outputType = get(query, 'output.type', 'grid');
      this.columnDefs = this.preprocessColumnDefinition(
        get(query, 'output.columnDefs', [])
      );
      this.outputMapping = get(query, 'mapping', '');
      const { type, ...dataSource } = get(query, 'dataSource', { type: false });
      this.title = get(query, 'title', '');
      this.description = get(query, 'description', '');
      // Run query
      switch (type) {
        case 'local':
          const { schema } = dataSource;
          this.docRepo.listAllOfType(schema).subscribe((values) => {
            // console.log({ values });
            this.output = values;
            this.updateOutputDisplay();
            this._rowData.next(values || []);
          });
          break;
        case 'remote':
          const endpoint = this.constructEndpointUrl(dataSource);
          // console.log({ endpoint });
          let headers = new HttpHeaders();
          if (has(dataSource, 'authentication.type')) {
            switch (get(dataSource, 'authentication.type')) {
              case 'basic-auth':
                const valueGetters = get(
                  dataSource,
                  'authentication.valueGetters',
                  {}
                );
                const context = {
                  ...dataSource.authentication,
                  ...this.contextData.getGlobalContext(valueGetters, {}),
                };
                if (has(context, 'username') && has(context, 'password')) {
                  const { username, password } = context;
                  headers = headers.append(
                    'Authorization',
                    'Basic ' + btoa(`${username}:${password}`)
                  );
                }
                break;
              case 'bearer':
                break;
              default:
                console.log('Unknown authentication type');
            }
          }
          this.http
            .get<Array<any>>(endpoint, { headers })
            .subscribe((values) => {
              this.output = values;
              this.updateOutputDisplay();
              this._rowData.next(values);
            });
          break;
        default:
          this.hasError = true;
          this.errorMessage = 'Unknown data source type';
          this._rowData.next([]);
      }

      // Update display
    } catch ({ message }) {
      this.hasError = true;
      this.errorMessage = message;
    }
  }

  preprocessColumnDefinition(def: Array<any>) {
    return def.map((item) => ({
      ...item,
      ...(has(item, 'valueGetter')
        ? {
            valueGetter: ({ data }) => {
              // console.log({ data, item });
              try {
                return search(data, item['valueGetter']);
              } catch (e) {
                return e.message;
              }
            },
          }
        : {}),
    }));
  }

  updateOutputDisplay() {
    if (!!this.modelOutput) {
      // Replace #modelOutput DIV contents with formatted JSON
      const formatter = new JSONFormatter(this.output, 0, { theme: 'dark' });
      while (this.modelOutput.nativeElement.firstChild) {
        this.modelOutput.nativeElement.removeChild(
          this.modelOutput.nativeElement.firstChild
        );
      }
      this.modelOutput.nativeElement.append(formatter.render());
    }
  }

  updateMappingResult(mappingResult) {
    if (!!this.mappingOutput && this.showMappingResult) {
      const formatter = new JSONFormatter(mappingResult, 0, { theme: 'dark' });
      while (this.mappingOutput.nativeElement.firstChild) {
        this.mappingOutput.nativeElement.removeChild(
          this.mappingOutput.nativeElement.firstChild
        );
      }
      this.mappingOutput.nativeElement.append(formatter.render());
    }
  }

  toggleQueryConfig() {
    this.showFormConfig = !this.showFormConfig;
  }

  loadQueryFromAdapter() {
    const dialogRef = this.dialog.open(AdapterQuerySelectDialogComponent, {});
    dialogRef.afterClosed().subscribe((data) => {
      if (!!data) {
        this.queryModelText = JSON.stringify(data, null, 4);
        this.queryModel = {
          value: this.queryModelText,
          language: 'json',
          uri: 'a:queryModel.json',
        };
        this.runQuery();
      }
    });
  }

  shareQuery() {
    const Q = JSON.parse(this.queryModelText);
    this.shareLinks.shareFlowLink('query-builder', { Q });
  }
}
