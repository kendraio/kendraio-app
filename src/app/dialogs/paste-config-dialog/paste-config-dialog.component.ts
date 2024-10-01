import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-paste-config-dialog',
  templateUrl: './paste-config-dialog.component.html',
  styleUrls: ['./paste-config-dialog.component.scss']
})
export class PasteConfigDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PasteConfigDialogComponent>
  ) { }

  ngOnInit() {
  }
}
