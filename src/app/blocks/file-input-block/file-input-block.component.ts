import {Component, NgZone} from '@angular/core';
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
  selectedFile: { name: string; size: string } | null = null;
  warningMessage: string | null = null;
  acceptedMimeTypes: string[] = [];

  constructor(   
    private stateService:SharedStateService,
    private ngZone: NgZone
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
      'xls': ['application/vnd.ms-excel'],
      'mp3': ['audio/mpeg']
    };
    const acceptTypes = get(config, 'accept', ['csv']);
    this.acceptedMimeTypes = flatten(acceptTypes.map(key => mimeTypeMap[key]));
    this.accept = this.acceptedMimeTypes.join(', ');
    this.label = get(config, 'label', 'Import');
    
    // Store the binary and arrayBuffer preferences from config
    this.binary = get(config, 'binary', null);
    this.arrayBuffer = get(config, 'arrayBuffer', true);
    
    this.enabledGetter = get(config, 'enabledGetter', null);
    this.setEnabled();
    console.log('FileInputBlockComponent.onConfigUpdate completed with state of ', this.enabled);
  }

  log(event) {
    console.log('FileInputBlockComponent.log',
      'event', event
    );
  }

  onFileChange(files: FileList) {
    console.log('File change event triggered', files);
    if (!files) {
      console.error('No files received in onFileChange');
      return;
    }
    
    this.ngZone.run(() => {
      console.log('Running file change handling in NgZone');
      if (files.length > 0) {
        // Reset warning message
        this.warningMessage = null;
        
        // Check if file type is acceptable
        const file = files[0];
        if (!this.isAcceptableFileType(file.type)) {
          this.warningMessage = `File type '${file.type || 'unknown'}' is not accepted. Please use one of: ${this.accept}`;
          console.warn(this.warningMessage);
          this.selectedFile = {
            name: file.name,
            size: this.formatFileSize(file.size)
          };
          return;
        }
        
        this.importFile(file);
      } else {
        console.warn('FileList is empty');
      }
    });
  }
  
  importFile(file: File) {
    console.log('Importing file', file.name);
    // Set the selected file info with formatted size
    this.selectedFile = {
      name: file.name,
      size: this.formatFileSize(file.size)
    };
    
    const fileReader = new FileReader();
    
    fileReader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    
    fileReader.onload = (_) => {
      console.log('File loaded');
      try {
        this.ngZone.run(() => {
          this.output.emit({
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
            content: fileReader.result as string
          });
          console.log('File emitted through NgZone');
        });
      } catch (err) {
        console.error('Error emitting file data:', err);
      }
    };
    
    // Determine if this file should be read as binary
    // Use config binary setting if provided, otherwise auto-detect
    let useBinary = this.binary;
    if (useBinary === null) {
      useBinary = this.isBinaryFileType(file.type);
    }
    
    if (useBinary) {
      console.log('Reading as binary');
      if (this.arrayBuffer) {
        fileReader.readAsArrayBuffer(file);
      } else {
        fileReader.readAsBinaryString(file);
      }
    } else {
      console.log('Reading as text');
      fileReader.readAsText(file);
    }
    console.log('File read');
  }
  
  // Format file size into human-readable format
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  // Set enabled state based on enabledGetter
  setEnabled(){    
    if(this.enabledGetter!==null) {
      this.enabled = mappingUtility({ data: this.model, context: this.context,state: this.stateService.state  }, this.enabledGetter);
      console.log('FileInputBlockComponent.setEnabled',this.enabled);
    }    
  } 

  // Determine if a file type should be treated as binary
  isBinaryFileType(mimeType: string): boolean {
    // List of MIME type prefixes that should be treated as binary
    const binaryTypes = [
      'audio/',
      'image/',
      'video/',
      'application/octet-stream',
      'application/pdf',
      'application/zip',
      'application/vnd.ms-',
      'application/vnd.openxmlformats-',
      'application/x-binary'
    ];
    
    return binaryTypes.some(prefix => mimeType.startsWith(prefix));
  }

  // Check if the file type is acceptable
  isAcceptableFileType(mimeType: string): boolean {
    // If no restrictions are set, accept all
    if (!this.acceptedMimeTypes || this.acceptedMimeTypes.length === 0) {
      return true;
    }
    
    // If the mime type is empty, try to be permissive
    if (!mimeType) {
      return true;
    }
    
    // Check for exact match
    if (this.acceptedMimeTypes.includes(mimeType)) {
      return true;
    }
    
    // Check for wildcard matches (for example if we accept 'image/*')
    for (const acceptedType of this.acceptedMimeTypes) {
      if (acceptedType.endsWith('/*')) {
        const prefix = acceptedType.slice(0, -1); // remove the '*'
        if (mimeType.startsWith(prefix)) {
          return true;
        }
      }
    }
    
    return false;
  }
}
