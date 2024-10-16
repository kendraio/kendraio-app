import { Component, Inject, OnInit } from "@angular/core";
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
} from "@angular/material/legacy-dialog";

@Component({
  selector: "app-confirm-delete-dialog",
  templateUrl: "./confirm-delete-dialog.component.html",
  styleUrls: ["./confirm-delete-dialog.component.scss"],
})
export class ConfirmDeleteDialogComponent implements OnInit {
  item;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    this.item = data.item;
  }

  ngOnInit() {}
}
