import { Component, Inject, OnInit } from '@angular/core';
import { AdaptersService } from '../../services/adapters.service';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { has, omitBy, pickBy } from 'lodash-es';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form-select-dialog',
  templateUrl: './form-select-dialog.component.html',
  styleUrls: ['./form-select-dialog.component.scss'],
})
export class FormSelectDialogComponent implements OnInit {
  adapters$;
  selectedAdapter;
  selectedForm;

  constructor(
    private readonly adapters: AdaptersService,
    public dialogRef: MatDialogRef<FormSelectDialogComponent>
  ) {}

  ngOnInit() {
    this.adapters$ = this.adapters.adapters$.pipe(
      map((adapters) => {
        return pickBy(adapters, (config) => has(config, 'adapter.forms'));
      })
    );
  }

  loadForm() {
    this.dialogRef.close({
      adapterId: this.selectedAdapter,
      formId: this.selectedForm,
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
