import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-blocks-dialog',
  templateUrl: './blocks-dialog.component.html',
  styleUrls: ['./blocks-dialog.component.scss']
})
export class BlocksDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BlocksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

}
