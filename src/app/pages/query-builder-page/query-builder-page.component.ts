import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { EDITOR_OPTIONS } from './editor-options';
import JSONFormatter from 'json-formatter-js';
import {get, has} from 'lodash-es';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {AdapterQuerySelectDialogComponent} from '../../dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component';
import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';
import { search } from 'jmespath';
import {DocumentRepositoryService} from '../../services/document-repository.service';
import {QUERY_SCHEMA} from './query.schema';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-query-builder-page',
  templateUrl: './query-builder-page.component.html',
  styleUrls: ['./query-builder-page.component.scss']
})
export class QueryBuilderPageComponent implements OnInit, AfterViewInit {

  showFormConfig = false;
  title = '';
  description = '';

  editorOptions = EDITOR_OPTIONS;

  queryModelText = JSON.stringify({}, null, 4);
  queryModel;

  output;
  @ViewChild('modelOutput', {static: false}) modelOutput: ElementRef;

  columnDefs = [];
  outputMapping = '';

  _rowData = new BehaviorSubject<Array<any>>([]);
  rowData = this._rowData.pipe(
    map(values => {
      if (!!this.outputMapping && this.outputMapping.length > 0) {
        try {
          return search(values, this.outputMapping);
        } catch (e) {
          console.log('JMESPath Error', e.message);
        }
      }
      return values;
    })
  );

  hasError = false;
  errorMessage = '';

  constructor(
    private readonly http: HttpClient,
    private shareLinks: ShareLinkGeneratorService,
    private readonly dialog: MatDialog,
    private readonly docRepo: DocumentRepositoryService
  ) { }

  ngOnInit() {
    const urlData = this.shareLinks.getData();
    if (urlData) {
      const { Q } = urlData;
      this.queryModelText = JSON.stringify(Q, null, 4);
      this.queryModel = {
        value: this.queryModelText,
        language: 'json',
        uri: 'a:queryModel.json'
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
      schemas: [{
        fileMatch: ['a:queryModel.json'],
        uri: 'https://app.kendra.io/v0/query-schema',
        schema: QUERY_SCHEMA
      }]
    });
  }

  runQuery() {
    this.hasError = false;
    try {
      // Parse and validate model
      const query = JSON.parse(this.queryModelText);
      this.columnDefs = this.preprocessColumnDefinition(get(query, 'columnDefs', []));
      this.outputMapping = get(query, 'mapping', '');
      const { type, ...dataSource } = get(query, 'dataSource', { type: false });
      this.title = get(query, 'title', '');
      this.description = get(query, 'description', '');
      // Run query
      switch (type) {
        case 'local':
          const { schema } = dataSource;
          this.docRepo.listAllOfType(schema).subscribe(values => {
            // console.log({ values });
            this.output = values;
            this.updateOutputDisplay();
            this._rowData.next(values || []);
          });
          break;
        case 'remote':
          const { endpoint } = dataSource;
          this.http.get<Array<any>>(endpoint).subscribe(values => {
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
    return def.map(item => ({
      ...item,
      ...has(item, 'valueGetter') ? { valueGetter: ({ data }) => {
        // console.log({ data, item });
        try {
          return search(data, item['valueGetter']);
        } catch (e) {
          return e.message;
        }
      }} : {}
    }));
  }

  updateOutputDisplay() {
    if (!!this.modelOutput) {
      // Replace #modelOutput DIV contents with formatted JSON
      const formatter = new JSONFormatter(this.output, 0, {theme: 'dark'});
      while (this.modelOutput.nativeElement.firstChild) {
        this.modelOutput.nativeElement.removeChild(this.modelOutput.nativeElement.firstChild);
      }
      this.modelOutput.nativeElement.append(formatter.render());
    }
  }

  toggleQueryConfig() {
    this.showFormConfig = !this.showFormConfig;
  }

  loadQueryFromAdapter() {
    const dialogRef = this.dialog.open(AdapterQuerySelectDialogComponent, {});
    dialogRef.afterClosed().subscribe(data => {
      if (!!data) {
        this.queryModelText = JSON.stringify(data, null, 4);
        this.queryModel = {
          value: this.queryModelText,
          language: 'json',
          uri: 'a:queryModel.json'
        };
        this.runQuery();
      }
    });
  }

  shareQuery() {
    const Q = JSON.parse(this.queryModelText);
    this.shareLinks.shareLink('query-builder', {Q});
  }
}
