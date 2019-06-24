import { Component, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'formly-field-video-viewer',
  template: `

<div>
<label>{{to.label}}</label>
</div>
<iframe class="e2e-iframe-trusted-src" width="640" height="360" [src]="videoUrl"></iframe>
 `,
})

export class FormlyFieldVideoViewer extends FieldType {
  @Input()
  formControl;

  videoUrl: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit() {
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


