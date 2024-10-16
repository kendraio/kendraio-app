import { Component, OnInit } from "@angular/core";
import { TestDataService } from "../../services/test-data.service";
import { forkJoin, Observable, of, Subject } from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from "rxjs/operators";
import { ImportProgressDialogComponent } from "../../dialogs/import-progress-dialog/import-progress-dialog.component";
import { Router } from "@angular/router";
import { PageTitleService } from "../../services/page-title.service";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { TestImportDialogComponent } from "../../dialogs/test-import-dialog/test-import-dialog.component";

@Component({
  selector: "app-test-api-page",
  templateUrl: "./test-api-page.component.html",
  styleUrls: ["./test-api-page.component.scss"],
})
export class TestApiPageComponent implements OnInit {
  entityTypes$;

  selectedType;
  entityList$;

  selectedEntity$;

  listAll$;

  isLoadingAll = false;

  constructor(
    private readonly testData: TestDataService,
    private readonly router: Router,
    private readonly pageTitle: PageTitleService,
    private readonly dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.entityTypes$ = this.testData.listEntityTypes({ live: true });
    this.entityList$ = new Subject<string>().pipe(
      switchMap((type) => this.testData.listEntities(type, { live: true })),
    );
    this.selectedEntity$ = new Subject<number>().pipe(
      switchMap((id) =>
        this.testData.getEntity(this.selectedType, id, { live: true }),
      ),
    );
    this.listAll$ = new Subject<string>().pipe(
      switchMap((type) => this.testData.listAll(type, { live: true })),
    );
  }

  changeEntityType(type) {
    this.selectedType = type;
    this.entityList$.next(type);
  }

  changeEntity(id) {
    this.selectedEntity$.next(id);
  }

  listAll() {
    this.listAll$.next(this.selectedType);
  }

  importEverything() {
    this.isLoadingAll = true;
    (this.testData.listEntityTypes({ live: true }) as Observable<any>)
      .pipe(
        take(1),
        map((types) =>
          types.filter((type) => type !== "video" && type !== "photo"),
        ),
        mergeMap((types) =>
          forkJoin(
            types.map((type) => {
              return this.testData.listAll(type, { live: true }).pipe(
                take(1),
                catchError((err) => of([])),
                map((records) => ({ type, records })),
              );
            }),
          ),
        ),
      )
      .subscribe((allItems) => {
        this.isLoadingAll = false;
        allItems.map((content) => {
          this.doImport(content);
        });
      });
  }

  importAll() {
    const type = this.selectedType;
    this.testData
      .listAll(type, { live: true })
      .pipe(take(1))
      .subscribe((records) => {
        if (records) {
          this.doImport({ type, records });
        }
      });
  }

  doImport(content) {
    const dialogRef = this.dialog.open(TestImportDialogComponent, {
      disableClose: true,
      data: { content },
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(["/docs"]);
    });
  }
}
