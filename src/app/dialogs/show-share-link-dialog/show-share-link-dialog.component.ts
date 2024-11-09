import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-share-link-dialog',
  templateUrl: './show-share-link-dialog.component.html',
  styleUrls: ['./show-share-link-dialog.component.scss']
})
export class ShowShareLinkDialogComponent implements OnInit {

  flowShareLink = '';
  dbShareLink = '';
  shareMode = '';

  @ViewChild('textBox') textBox;

  constructor(
    public dialogRef: MatDialogRef<ShowShareLinkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
    this.flowShareLink = this.data.flowShareLink;
    this.dbShareLink = this.data.dbShareLink;
  }

  copyText() {
    this.textBox.nativeElement.focus();
    this.textBox.nativeElement.select();
    window.document.execCommand('copy');
    // TODO: consider the more new API:
    // navigator.clipboard.writeText(this.shareLink);
  }

}
