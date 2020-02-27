import { Component, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'formly-field-video-viewer2',
  template: `

  <mat-card>
  <mat-card-header>
    <mat-label>{{to.label}}   ({{to.uiSchema.adapter}} Video Player)</mat-label>
  </mat-card-header>
  <mat-card-content>


            <iframe *ngIf="formControl.value"
            class="e2e-iframe-trusted-src"
            [src]="videoUrl"
            width="800" height="600" 
            frameborder="0" 
            allow="autoplay; fullscreen; gyroscope; accelerometer" 
            allowfullscreen title="Bali Blue"></iframe>



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

    switch (this.to.uiSchema.adapter) {
      case 'dailymotion':
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('//www.dailymotion.com/embed/video/'
          + this.formControl.value + '?');
        break;

      default:
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/'
          + this.formControl.value + '?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=16166');

        break;
    }



  }




}


