import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {flatten, get} from 'lodash-es';

@Component({
  selector: 'app-file-input-block',
  templateUrl: './file-input-block.component.html',
  styleUrls: ['./file-input-block.component.scss']
})
export class FileInputBlockComponent extends BaseBlockComponent {

  label = 'Import';
  accept = 'text/csv';

  // TODO: Add support for Excel files
  onConfigUpdate(config) {
    const mimeTypeMap = {
      'csv': ['text/csv'],
      'json': ['application/json'],
      'xml': ['text/xml', 'application/json']
    };
    this.accept = flatten(get(config, 'accept', ['csv']).map(key => mimeTypeMap[key])).join(', ');
    this.label = get(config, 'label', 'Import');
  }

  onFileChange(files: FileList) {
    if (files.length > 0) {
      this.importFile(files[0]);
    }
  }

  importFile(file: File) {
    const fileReader = new FileReader();
    fileReader.onload = (_) => {
      this.output.emit({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        content: fileReader.result as string
      });
    };
    fileReader.readAsText(file);
  }
}
