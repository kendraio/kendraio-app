import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { interval } from 'rxjs';
import { startWith, take } from 'rxjs/operators';
import * as X2JS from 'x2js';
import { DatabaseService } from '../../services/database.service';

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
    private readonly database: DatabaseService
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
      this.database.save({
        name: _r['RecordingInformationNotification'].ProjectList.Project.ProjectName,
        type: 'Project'
      }).subscribe(() => {
        interval(10).pipe(
          startWith(0),
          take(100),
        ).subscribe(
          () => this.progress += 1,
          err => console.log(),
          () => this.dialogRef.close()
        );
      })
    } else {
      this.dialogRef.close();
    }

  }

}
