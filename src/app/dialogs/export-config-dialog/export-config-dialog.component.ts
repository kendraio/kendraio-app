import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-export-config-dialog',
  templateUrl: './export-config-dialog.component.html',
  styleUrls: ['./export-config-dialog.component.scss'],
})
export class ExportConfigDialogComponent implements OnInit {
  configText = '';

  @ViewChild('textBox') textBox;

  constructor(
    public dialogRef: MatDialogRef<ExportConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.configText = this.data.configText;
  }

  copyText() {
    this.textBox.nativeElement.focus();
    this.textBox.nativeElement.select();
    window.document.execCommand('copy');
  }
}
