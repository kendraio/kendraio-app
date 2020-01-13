import { Component, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'formly-field-video-viewer2',
  template: `

  <mat-card>
  <mat-card-header>
    <mat-label>{{to.label}}</mat-label>
  </mat-card-header>
  <mat-card-content>





<iframe *ngIf="formControl.value"
class="e2e-iframe-trusted-src"
[src]="videoUrl"
width="800" height="600" 
frameborder="0" 
allow="autoplay; fullscreen; gyroscope; accelerometer" 
allowfullscreen title="Bali Blue"></iframe>

{{formControl.value}}


</mat-card-content>
</mat-card><br>

 `,
})

export class FormlyFieldVideoViewerDM extends FieldType {
  @Input()
  formControl;
  videoId: any;
  videoUrl: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit() {
    this.videoId = this.formControl.value;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('//www.dailymotion.com/embed/video/' 
    + this.formControl.value + '?');
  }




}


