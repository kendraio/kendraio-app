import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-file-input',
  templateUrl: './formly-file-input.component.html',
  styleUrls: ['./formly-file-input.component.scss'],
})
export class FormlyFileInputComponent extends FieldType {
  accept = '*';
  fileName = '';

  get label() {
    return 'Select file';
  }

  onFileChange(files: FileList) {
    if (files.length > 0) {
      this.fileName = files.item(0).name;
      this.attachFile(files[0]);
    }
  }

  attachFile(file: File) {
    this.formControl.setValue(file);
  }
}
