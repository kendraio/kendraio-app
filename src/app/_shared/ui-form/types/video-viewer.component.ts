import { Component, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'formly-field-video-viewer',
  template: `

  <mat-card>
  <mat-card-header>
    <mat-label>{{to.label}}</mat-label>
  </mat-card-header>
  <mat-card-content>
<iframe class="e2e-iframe-trusted-src" width="640" height="360" [src]="videoUrl"></iframe><br>

Video URL<br>
<a href="https://youtu.be/{{videoId}}" target="_blank">https://youtu.be/{{videoId}}</a><br><br>


</mat-card-content>
</mat-card><br>

 `,
})

export class FormlyFieldVideoViewer extends FieldType {
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
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.formControl.value);
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


