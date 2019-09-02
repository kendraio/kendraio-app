import { Component, Input, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-thumbnail-viewer',
  template: `

  <mat-card>
  <mat-card-header>
    <mat-label>{{to.label}}</mat-label>
  </mat-card-header>
  <mat-card-content>

<div class="k-thumbnails">

<img
role="option" *ngFor="let thumb of thumbs; index as i" (click)="selectThumb(i)"
[ngStyle]="{'width.px': thumb.width/1.5, 'height.px': thumb.height/1.5}"
[ngClass]="{'default-thumb': thumb.isDefault}"
src="{{thumb.url}}">


</div>

</mat-card-content>
</mat-card>

 `,
})

export class ThumbnailViewerComponent extends FieldType implements OnInit {
  @Input()
  formControl;
  videoId: any;
  videoUrl: any;
  thumbs: Array<any>;

  ngOnInit() {
    this.thumbs = this.formControl.value;
  }

  selectThumb(i: number) {
    this.thumbs.forEach(t => {
t.isDefault = false;
   });
   this.thumbs[i].isDefault = true;
  }
}
