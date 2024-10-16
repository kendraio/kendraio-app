import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { MatLegacySnackBar as MatSnackBar } from "@angular/material/legacy-snack-bar";
import { FormDataSelectDialogComponent } from "../dialogs/form-data-select-dialog/form-data-select-dialog.component";
import { DocumentRepositoryService } from "./document-repository.service";
import { map, switchMap, tap } from "rxjs/operators";
import { get, has } from "lodash-es";
import { ApiDataSelectDialogComponent } from "../dialogs/api-data-select-dialog/api-data-select-dialog.component";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FormDataService {
  constructor(
    private readonly dialog: MatDialog,
    private readonly notify: MatSnackBar,
    private readonly database: DocumentRepositoryService,
    private readonly http: HttpClient,
  ) {}

  loadDataFromAPI() {
    const dialogRef = this.dialog.open(ApiDataSelectDialogComponent);
    return dialogRef.afterClosed().pipe(
      map((data) => {
        if (!!data) {
          const { endpoint, values } = data;
          return { status: true, endpoint, values };
        }
        return { status: false, endpoint: "", values: {} };
      }),
    );
  }

  loadData(schemaName) {
    return this.database.listAllOfType(schemaName).pipe(
      switchMap((docs) => {
        const dialogRef = this.dialog.open(FormDataSelectDialogComponent, {
          data: {
            schemaName,
            docs,
          },
        });
        return dialogRef.afterClosed().pipe(
          switchMap((values) => {
            if (!!values && has(values, "id")) {
              return this.database.getDoc(get(values, "id"));
            }
            return of(false);
          }),
        );
      }),
    );
  }

  saveData(schemaName, values) {
    return this.database.putDoc({ "@schema": schemaName, ...values }).pipe(
      tap(({ ok }) => {
        if (ok) {
          const message = "Database update successful";
          this.notify.open(message, "OK", {
            duration: 4000,
            verticalPosition: "top",
          });
        }
      }),
    );
  }

  saveAPIData(endpoint, data) {
    return this.http.put(`${endpoint}/${data["id"]}`, data).pipe(
      tap((ok) => {
        if (ok) {
          const message = "API update successful";
          this.notify.open(message, "OK", {
            duration: 4000,
            verticalPosition: "top",
          });
        }
      }),
    );
  }

  noSchemaName() {
    const message = "No schema name provided";
    this.notify.open(message, "OK", {
      duration: 4000,
      verticalPosition: "top",
    });
  }
}
