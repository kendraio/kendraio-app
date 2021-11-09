import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-share-link-dialog',
  templateUrl: './show-share-link-dialog.component.html',
  styleUrls: ['./show-share-link-dialog.component.scss']
})
export class ShowShareLinkDialogComponent implements OnInit {

  shareLink = '';

  @ViewChild('textBox') textBox;

  constructor(
    public dialogRef: MatDialogRef<ShowShareLinkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {
    this.shareLink = this.data.shareLink;
  }

  copyText() {
    this.textBox.nativeElement.focus();
    this.textBox.nativeElement.select();
    window.document.execCommand('copy');
  }

}
