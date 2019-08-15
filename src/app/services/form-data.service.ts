import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {MatDialog, MatSnackBar} from '@angular/material';
import {FormDataSelectDialogComponent} from '../dialogs/form-data-select-dialog/form-data-select-dialog.component';
import {DocumentRepositoryService} from './document-repository.service';
import {map, switchMap} from 'rxjs/operators';
import {get, has} from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(
    private readonly dialog: MatDialog,
    private readonly notify: MatSnackBar,
    private readonly database: DocumentRepositoryService
  ) { }

  loadData(schemaName) {
    return this.database.listAllOfType(schemaName).pipe(
      switchMap(docs => {
        const dialogRef = this.dialog.open(FormDataSelectDialogComponent, {
          data: {
            schemaName,
            docs
          },
        });
        return dialogRef.afterClosed().pipe(
          switchMap(values => {
            if (!!values && has(values, 'id')) {
              return this.database.getDoc(get(values, 'id'));
            }
            return of(false);
          })
        );
      })
    );
  }

  noSchemaName() {
    const message = 'No schema name provided';
    this.notify.open(message, 'OK', {
      duration: 4000,
      verticalPosition: 'top'
    });
  }
}
