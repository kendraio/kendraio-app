import { Component, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'formly-field-video-viewer2',
  template: `

  <mat-card appearance="outlined">
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

export class FormlyFieldVideoViewer2 extends FieldType {
  @Input()
  private _formControl: any;
  public get formControl() {
        return this._formControl;
    }
    public set formControl(value) {
        this._formControl = value;
    }
  videoId: any;
  videoUrl: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit() {
    this.videoId = this.formControl.value;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/'
    + this.formControl.value + '?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=16166');
  }

  // innerHTML: string =  "<iframe width='560' height='315' src='https://www.youtube.com/embed/YA9N4nsAxZo' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
  // updateVideoUrl(id: string) {
  // Appending an ID to a YouTube URL is safe.
  // Always make sure to construct SafeValue objects as
  // close as possible to the input data so
  // that it's easier to check if the value is safe.
  // this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + id;
  // videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YA9N4nsAxZo');
  //  }


}


