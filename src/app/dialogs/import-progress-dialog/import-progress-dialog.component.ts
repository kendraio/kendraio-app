import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { interval } from 'rxjs';
import { startWith, take } from 'rxjs/operators';
import X2JS from 'x2js';
import { DocumentRepositoryService } from '../../services/document-repository.service';

@Component({
  selector: 'app-import-progress-dialog',
  templateUrl: './import-progress-dialog.component.html',
  styleUrls: ['./import-progress-dialog.component.scss']
})
export class ImportProgressDialogComponent implements OnInit {

  progress = 0;

  constructor(
    public dialogRef: MatDialogRef<ImportProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly docsRepo: DocumentRepositoryService
  ) { }

  ngOnInit() {
    const { content } = this.data;

    const defaultConfig = {
      enableToStringFunc: false
    };
    const config = {};
    const x2js = new X2JS({ ...defaultConfig, ...config });

    const _r = x2js.xml2js(content);
    console.log(_r);

    if (_r['RecordingInformationNotification'].ProjectList.Project.ProjectName) {
      const data = {
        name: _r['RecordingInformationNotification'].ProjectList.Project.ProjectName,
        json_data: _r
      };
      this.docsRepo.addNew('mrin_Project', data).subscribe(() => {
        interval(10).pipe(
          startWith(0),
          take(100),
        ).subscribe(
          () => this.progress += 1,
          err => console.log(err),
          () => this.dialogRef.close()
        );
      });
    } else {
      this.dialogRef.close();
    }

  }

}
