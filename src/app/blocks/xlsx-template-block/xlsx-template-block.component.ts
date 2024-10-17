import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { map } from 'rxjs/operators';
import { get, isArray, isString } from 'lodash-es';

@Component({
  selector: 'app-xlsx-template-block',
  templateUrl: './xlsx-template-block.component.html',
  styleUrls: ['./xlsx-template-block.component.scss'],
})
export class XlsxTemplateBlockComponent extends BaseBlockComponent {
  // Examples:
  // https://s3.amazonaws.com/portals-prod-useruploads/media_files/ISRC%20Ingest%20Form.xlsx
  // https://kendraio.github.io/kendraio-adapter/extra/soundexchange/template.xlsx
  // https://kendraio.github.io/kendraio-adapter/extra/soproq/template.xlsx

  templateUrl;
  errorMessage = '';
  hasError = false;
  headerRows;

  constructor(private http: HttpClient) {
    super();
  }

  onConfigUpdate(config: any) {
    this.templateUrl = get(this.config, 'template');
    this.headerRows = get(this.config, 'headerRows', 0);
  }

  onData(data: any, firstChange: boolean) {
    this.hasError = false;
    if (firstChange && !get(this.config, 'allowFirst', false)) {
      return;
    }
    if (!this.templateUrl) {
      return;
    }
    if (!isArray(this.model)) {
      if (this.model) {
        this.hasError = true;
        this.errorMessage =
          'The XLSX template task requires an array of rows as data. Non-row data was provided.';
      }
      return;
    }
    const url = this.templateUrl;
    this.http
      .get(url, { responseType: 'arraybuffer' })
      .pipe(
        map((blob) => XLSX.read(blob, { type: 'buffer', cellStyles: true }))
      )
      .subscribe(
        (template) => {
          try {
            XLSX.utils.sheet_add_aoa(
              template.Sheets[template.SheetNames[0]],
              this.model,
              {
                origin: this.headerRows,
              }
            );
            const wopts = { bookType: 'xlsx', bookSST: false, type: 'array' };
            const wbout = XLSX.write(template, wopts as any);
            this.output.emit({
              name: 'output.xlsx',
              size: wbout.length,
              type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              lastModified: Date.now(),
              content: wbout,
            });
          } catch (e) {
            this.hasError = true;
            this.errorMessage = e.message;
          }
        },
        (error) => {
          this.hasError = true;
          this.errorMessage = isString(error)
            ? error
            : error.message || 'Error writing to XLSX template';
        }
      );
  }
}
