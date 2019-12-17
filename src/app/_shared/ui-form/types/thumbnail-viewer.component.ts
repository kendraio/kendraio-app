import { Component, Input, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-thumbnail-viewer',
  template: `

  <section>

    <mat-label>{{to.label}}</mat-label><br>

  <mat-card-content>

<div class="k-thumbnails">

<img
role="option" *ngFor="let thumb of thumbs; index as i" (click)="selectThumb(i)"
[ngStyle]="{'width.px': thumb.width/1.5, 'height.px': thumb.height/1.5}"
[ngClass]="{'default-thumb': thumb.isDefault}"
src="{{thumb.url}}">


</div>

</mat-card-content>
</section>

 `,
})

export class ThumbnailViewerComponent extends FieldType implements OnInit {
  @Input()
  videoId: any = 'I_txFxMKg4U';
  videoUrl: any;
  thumbs: Array<any> = [];

  ngOnInit() {

    // this.videoUrl = this.cleanUrl(this.formControl.value); // TODO: include whole uRL


    // TODO: how do we locate the default thumb?
    this.thumbs = [
      // {url: 'https://i.ytimg.com/vi/' + this.formControl.value + '/0.jpg', isDefault: true},
{url: 'https://i.ytimg.com/vi/' + this.formControl.value + '/1.jpg', isDefault: false},
{url: 'https://i.ytimg.com/vi/' + this.formControl.value + '/2.jpg', isDefault: true},
{url: 'https://i.ytimg.com/vi/' + this.formControl.value + '/3.jpg', isDefault: false},
    ];





  }

  cleanUrl(urlStr: string) {
    if (urlStr.length) {
        return urlStr.split('/')[4];
    }
  
    }


  selectThumb(i: number) {
    this.thumbs.forEach(t => {
      t.isDefault = false;
   });
   this.thumbs[i].isDefault = true;
  }
}
