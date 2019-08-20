import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { EDITOR_OPTIONS } from './editor-options';
import JSONFormatter from 'json-formatter-js';
import {get} from 'lodash-es';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {AdapterQuerySelectDialogComponent} from '../../dialogs/adapter-query-select-dialog/adapter-query-select-dialog.component';
import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';

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

  output;
  @ViewChild('modelOutput', {static: false}) modelOutput: ElementRef;

  columnDefs = [];

  rowData = new BehaviorSubject<Array<any>>([]);

  hasError = false;
  errorMessage = '';

  constructor(
    private readonly http: HttpClient,
    private shareLinks: ShareLinkGeneratorService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    const urlData = this.shareLinks.getData();
    if (urlData) {
      const { Q } = urlData;
      this.queryModelText = JSON.stringify(Q, null, 4);
    }
    this.onQueryModelChange();
  }

  ngAfterViewInit() {
    this.updateOutputDisplay();
  }

  initEditor() {
  }

  onQueryModelChange() {
    this.hasError = false;
    try {
      // Parse and validate model
      const query = JSON.parse(this.queryModelText);
      this.columnDefs = get(query, 'columnDefs', []);
      const { type, ...dataSource } = get(query, 'dataSource', { type: false });
      this.title = get(query, 'title', '');
      this.description = get(query, 'description', '');
      // Run query
      switch (type) {
        case 'local':
          this.rowData.next([]);
          break;
        case 'remote':
          const { endpoint } = dataSource;
          this.http.get<Array<any>>(endpoint).subscribe(values => {
            this.output = values;
            this.updateOutputDisplay();
            this.rowData.next(values);
          });
          break;
        default:
          this.hasError = true;
          this.errorMessage = 'Unknown data source type';
          this.rowData.next([]);
      }

      // Update display

    } catch ({ message }) {
      this.hasError = true;
      this.errorMessage = message;
    }
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

  toggleFormConfig() {
    this.showFormConfig = !this.showFormConfig;
  }

  loadQueryFromAdapter() {
    const dialogRef = this.dialog.open(AdapterQuerySelectDialogComponent, {});
    dialogRef.afterClosed().subscribe(data => {
      if (!!data) {
        this.queryModelText = JSON.stringify(data, null, 4);
      }
    });
  }

  shareQuery() {
    const Q = JSON.parse(this.queryModelText);
    this.shareLinks.shareLink('query-builder', {Q});
  }
}
