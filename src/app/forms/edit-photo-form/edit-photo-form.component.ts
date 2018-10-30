import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReplaceImageUrlDialogComponent } from '../../dialogs/replace-image-url-dialog/replace-image-url-dialog.component';

@Component({
  selector: 'app-edit-photo-form',
  templateUrl: './edit-photo-form.component.html',
  styleUrls: ['./edit-photo-form.component.scss']
})
export class EditPhotoFormComponent implements OnInit {

  @Input() item;

  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  replaceImage() {
    this.dialog.open(ReplaceImageUrlDialogComponent, {
      data: { item: this.item }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.item['image'] = {
          src: result
        };
      }
    });
  }
}
