import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReplaceImageUrlDialogComponent } from '../../dialogs/replace-image-url-dialog/replace-image-url-dialog.component';
import { DatabaseService } from '../../services/database.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-photo-form',
  templateUrl: './edit-photo-form.component.html',
  styleUrls: ['./edit-photo-form.component.scss']
})
export class EditPhotoFormComponent implements OnInit {

  @Input() item;

  form;

  constructor(
    private readonly dialog: MatDialog,
    private readonly database: DatabaseService,
    private readonly fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      tags: [[]]
    });
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

  onTap(event) {

  }

  // addTag(event: MouseEvent) {
  //   const { offsetX, offsetY, target: { clientWidth, clientHeight }} = event as any;
  //   if (clientWidth > 0 && clientHeight > 0) {
  //     const hitX = offsetX / clientWidth;
  //     const hitY = offsetY / clientHeight;
  //     if (!this.item.tags) {
  //       this.item.tags = [];
  //     }
  //     const person = { type: 'Person' };
  //     this.database.save(person).subscribe(({ id: personId }) => {
  //       const rel = {
  //         hitX,
  //         hitY,
  //         type: 'InclusionRelationship',
  //         source: this.item['id'],
  //         target: personId
  //       };
  //       this.database.save(rel).subscribe(_r => {
  //         this.item.tags.push(_r['id']);
  //       })
  //     });
  //   }
  // }
  //
  // onDeleteTag(tagId) {
  //   if (this.item.tags) {
  //     const _i = this.item.tags.indexOf(tagId);
  //     this.database.delete(tagId).subscribe(() => {
  //       if (_i > -1) {
  //         this.item.tags.splice(_i, 1);
  //       }
  //     });
  //   }
  // }

}
