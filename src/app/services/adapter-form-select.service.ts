import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import {FormSelectDialogComponent} from '../dialogs/form-select-dialog/form-select-dialog.component';
import {map, switchMap} from 'rxjs/operators';
import {has} from 'lodash-es';
import {Observable, of} from 'rxjs';
import {KendraioFormService} from '../_shared/ui-form/services/kendraio.form.service';
import {SwaggerFormSelectDialogComponent} from '../dialogs/swagger-form-select-dialog/swagger-form-select-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AdapterFormSelectService {

  constructor(
    private readonly dialog: MatDialog,
    private readonly formService: KendraioFormService
  ) { }

  selectForm(): Observable<any> {
    const dialogRef = this.dialog.open(FormSelectDialogComponent);
    return dialogRef.afterClosed().pipe(
      switchMap(data => {
        if (!!data && has(data, 'adapterId') && has(data, 'formId')) {
          const { adapterId, formId } = data;
          if (adapterId.length > 0 && formId.length > 0) {
            return this.formService.getFormData(adapterId, formId).pipe(
              map(([ UISchema, JSONSchema ]) => ({ UISchema, JSONSchema }))
            );
          }
        }
        return of(false);
      })
    );
  }

  selectSwagger(): Observable<any> {
    const dialogRef = this.dialog.open(SwaggerFormSelectDialogComponent);
    return dialogRef.afterClosed().pipe(
      switchMap(data => {
        if (!!data) {
          return of({ UISchema: {}, JSONSchema: data });
        }
        return of(false);
      })
    );
  }
}
