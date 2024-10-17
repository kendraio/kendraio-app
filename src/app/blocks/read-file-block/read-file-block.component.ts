import { Component, NgZone } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { clone, get, pick, set } from 'lodash-es';
import { mappingUtility } from '../mapping-block/mapping-util';

@Component({
  selector: 'app-read-file-block',
  templateUrl: './read-file-block.component.html',
  styleUrls: ['./read-file-block.component.scss'],
})
export class ReadFileBlockComponent extends BaseBlockComponent {
  fileGetter = 'data';
  skipFirst = true;
  readMode = 'dataUrl'; // or 'text', 'binary' 'arrayBuffer'
  encoding: 'UTF-8';
  mode = 'update'; // or 'replace'
  updatePath = 'file';

  hasError = false;
  errorMessage = '';
  isLoading = false;

  constructor(private readonly zone: NgZone) {
    super();
  }

  onConfigUpdate(config: any) {
    this.skipFirst = get(config, 'skipFirst', true);
    this.fileGetter = get(config, 'fileGetter', 'data');
    this.readMode = get(config, 'readMode', 'dataUrl');
    this.encoding = get(config, 'encoding', 'UTF-8');
    this.mode = get(config, 'mode', 'update');
    this.updatePath = get(config, 'updatePath', 'file');
  }

  onData(data: any, firstChange: boolean) {
    if (this.skipFirst && firstChange) {
      return;
    }
    this.hasError = false;
    const file = mappingUtility(
      { data: this.model, context: this.context },
      this.fileGetter
    );
    if (file) {
      const fileMeta = pick(file, ['name', 'lastModified', 'type', 'size']);
      this.isLoading = true;
      const reader = new FileReader();
      reader.addEventListener(
        'load',
        () => {
          if (this.mode === 'update') {
            const outputData = clone(data);
            set(outputData, this.updatePath, {
              ...fileMeta,
              result: reader.result,
            });
            this.output.emit(outputData);
          } else {
            this.output.emit({ ...fileMeta, result: reader.result });
          }
          this.zone.run(() => {
            this.isLoading = false;
          });
        },
        false
      );

      switch (this.readMode) {
        case 'dataUrl':
          reader.readAsDataURL(file);
          break;
        case 'text':
          reader.readAsText(file, this.encoding);
          break;
        case 'binary':
          reader.readAsBinaryString(file);
          break;
        case 'arrayBuffer':
          reader.readAsArrayBuffer(file);
          break;
        default:
          this.hasError = true;
          this.errorMessage = 'Unknown mode in read-file block';
          this.isLoading = false;
          console.error('Unknown read mode in file block');
      }
    }
  }
}
