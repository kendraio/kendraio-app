import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {flatten, get} from 'lodash-es';
import { SharedStateService } from 'src/app/services/shared-state.service';
import { mappingUtility } from '../mapping-block/mapping-util';

@Component({
  selector: 'app-file-input-block',
  templateUrl: './file-input-block.component.html',
  styleUrls: ['./file-input-block.component.scss']
})
export class FileInputBlockComponent extends BaseBlockComponent {

  label = 'Import';
  accept = 'text/csv';
  binary = false;
  arrayBuffer = true;

  enabled:boolean = true;
  enabledGetter:string = null;

  constructor(   
    private stateService:SharedStateService
  ) {
    super();
    stateService.state$.subscribe(state => { setTimeout(() =>{this.setEnabled()}) });    
  }

  // vimeo vids accept = application/vnd.vimeo.*+json;version=3.4

  // TODO: Add support for Excel files
  onConfigUpdate(config) {
    const mimeTypeMap = {
      'csv': ['text/csv'],
      'json': ['application/json'],
      'xml': ['text/xml', 'application/json'],
      'xlsx': ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
      'xls': ['application/vnd.ms-excel']
    };
    this.accept = flatten(get(config, 'accept', ['csv']).map(key => mimeTypeMap[key])).join(', ');
    this.label = get(config, 'label', 'Import');
    this.binary = get(config, 'binary', false);
    this.arrayBuffer = get(config, 'arrayBuffer', true);
    this.enabledGetter = get(config, 'enabledGetter', null);
    this.setEnabled();
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
    if (this.binary) {
      if (this.arrayBuffer) {
        fileReader.readAsArrayBuffer(file);
      } else {
        fileReader.readAsBinaryString(file);
      }
    } else {
      fileReader.readAsText(file);
    }
  }
  /**
   * Set enabled state based on enabledGetter
   */
  setEnabled(){    
    if(this.enabledGetter!==null) {
      this.enabled = mappingUtility({ data: this.model, context: this.context,state: this.stateService.state  }, this.enabledGetter);        
    }    
  } 
}
