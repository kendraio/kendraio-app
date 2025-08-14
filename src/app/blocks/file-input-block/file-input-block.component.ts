import {Component} from '@angular/core';
import {BaseBlockComponent} from '../base-block/base-block.component';
import {flatten, get} from 'lodash-es';
import { SharedStateService } from 'src/app/services/shared-state.service';
import { mappingUtility } from '../mapping-block/mapping-util';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { formatByteSizeForHumans } from '../http-block/http-utils';
import { AppSettingsService } from '../../services/app-settings.service';


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

  private snackBar: MatSnackBar;

  constructor(   
    private stateService:SharedStateService,
    snackBar: MatSnackBar,
    private settings: AppSettingsService
  ) {
    super();
    this.snackBar = snackBar;
    stateService.state$.subscribe(state => { setTimeout(() =>{this.setEnabled()}) });    
  }

  private warn(message: string) {
    const globalDebugMode = this.settings.get('debugMode', false);
    console.warn(message);
    if (globalDebugMode && this.snackBar) {
      this.snackBar.open(message, 'Close', { duration: 5000 });
    }
  }

  private isBinaryMimeType(mime: string): boolean {
    const BINARY_MIME_REGEX = /^(audio|video|image)\//i;
    return BINARY_MIME_REGEX.test(mime);
  }

  onConfigUpdate(config) {
    const mimeTypeMap = {
      'csv': ['text/csv'],
      'json': ['application/json'],
      'xml': ['text/xml', 'application/json', 'application/xml'],
      'xlsx': ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
      'xls': ['application/vnd.ms-excel'],
      'mp3': ['audio/mpeg'],
      'wav': ['audio/wav'],
    };
    this.accept = flatten(get(config, 'accept', ['csv']).map(key => mimeTypeMap[key])).join(', ');
    this.label = get(config, 'label', 'Import');
    this.binary = get(config, 'binary', false);
    this.arrayBuffer = get(config, 'arrayBuffer', true);
    if (!this.binary && this.arrayBuffer) {
      this.warn('arrayBuffer is set to true, but binary is false. This may cause issues with file reading.');
    }
    if (this.binary && !this.arrayBuffer) {
      this.warn('arrayBuffer is set to false, but binary is true. This may cause issues with file reading.');
    }
    this.enabledGetter = get(config, 'enabledGetter', null);
    this.setEnabled();
  }
  

  onFileChange(files: FileList) {
    if (files.length > 0) {
      const file = files[0];
      const looksBinary = this.isBinaryMimeType(file.type);
      console.log(`Selected file size: ${formatByteSizeForHumans(file.size)}`);
      console.log(`Binary configuration: binary=${this.binary}, arrayBuffer=${this.arrayBuffer}`);
      if (looksBinary && (!this.binary || !this.arrayBuffer)) {
        this.warn(`Selected file appears binary (${file.type || 'unknown type'}) but 'binary' or 'arrayBuffer' are not enabled. This may cause issues with file reading.`);
      }
      this.importFile(file);
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
