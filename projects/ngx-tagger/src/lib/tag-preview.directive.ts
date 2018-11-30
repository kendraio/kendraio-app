import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { TagInterface } from './interfaces';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[ngxTagPreview]'
})
export class TagPreviewDirective {

  @Input('ngxTagPreview') set tag({ topLeft, bottomRight }: TagInterface) {
    const tl = `${topLeft.x * 100}% ${topLeft.y * 100}%`;
    const tr = `${bottomRight.x * 100}% ${topLeft.y * 100}%`;
    const bl = `${topLeft.x * 100}% ${bottomRight.y * 100}%`;
    const br = `${bottomRight.x * 100}% ${bottomRight.y * 100}%`;
    const clip = `polygon(${tl}, ${tr}, ${br}, ${bl})`;
    this.clipPath = this.sanitizer.bypassSecurityTrustStyle(clip);
  }

  @HostBinding('style.clip-path')
  clipPath: SafeStyle;

  // TODO: scale up and translate the tag preview
  @HostBinding('style.transform')
  transform: SafeStyle;

  constructor(
    private readonly el: ElementRef,
    private readonly sanitizer: DomSanitizer
  ) {
  }

}
