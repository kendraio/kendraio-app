import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {forkJoin, interval} from 'rxjs';
import {startWith, take} from 'rxjs/operators';
import {DocumentRepositoryService} from '../../services/document-repository.service';

@Component({
  selector: 'app-test-import-dialog',
  templateUrl: './test-import-dialog.component.html',
  styleUrls: ['./test-import-dialog.component.scss']
})
export class TestImportDialogComponent implements OnInit {

  progress = 0;
  importType = '';

  constructor(
    public dialogRef: MatDialogRef<TestImportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private readonly docsRepo: DocumentRepositoryService
  ) {
  }

  ngOnInit() {
    const { content: { type, records } } = this.data;
    this.importType = type;
    forkJoin(records.map(item => this.docsRepo.addNew(type, { type, ...item })))
      .subscribe(() => {
        interval(10).pipe(
          startWith(0),
          take(100),
        ).subscribe(
          () => this.progress += 1,
          err => console.log(err),
          () => this.dialogRef.close()
        );
      });
  }

}
