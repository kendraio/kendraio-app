import {Component, Inject, OnInit} from '@angular/core';
import {AdaptersService} from '../../services/adapters.service';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-form-select-dialog',
  templateUrl: './form-select-dialog.component.html',
  styleUrls: ['./form-select-dialog.component.scss']
})
export class FormSelectDialogComponent implements OnInit {

  adapters$;
  selectedAdapter;
  selectedForm;

  constructor(
    private readonly adapters: AdaptersService,
    public dialogRef: MatDialogRef<FormSelectDialogComponent>,
  ) { }

  ngOnInit() {
    this.adapters$ = this.adapters.adapters$;
  }

  loadForm() {
    this.dialogRef.close({
      adapterId: this.selectedAdapter,
      formId: this.selectedForm
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
