import { Directive, ElementRef, HostBinding, Input } from "@angular/core";
import { TagInterface } from "./tag.interface";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[ngxTagPreview]",
})
export class TagPreviewDirective {
  @Input("ngxTagPreview") set tag({ topLeft, bottomRight }: TagInterface) {
    const tl = `${topLeft.x * 100}% ${topLeft.y * 100}%`;
    const tr = `${bottomRight.x * 100}% ${topLeft.y * 100}%`;
    const bl = `${topLeft.x * 100}% ${bottomRight.y * 100}%`;
    const br = `${bottomRight.x * 100}% ${bottomRight.y * 100}%`;
    const clip = `polygon(${tl}, ${tr}, ${br}, ${bl})`;
    this.clipPath = this.sanitizer.bypassSecurityTrustStyle(clip);

    const r = 1 / (bottomRight.y - topLeft.y);
    const t = `scale(${r}) translate3d(-${topLeft.x * 100}%, -${
      topLeft.y * 100
    }% , 0)`;
    this.transform = this.sanitizer.bypassSecurityTrustStyle(t);
  }

  @HostBinding("style.clip-path")
  clipPath: SafeStyle;

  @HostBinding("style.transform-origin")
  origin = "top left";

  // // TODO: scale up and translate the tag preview
  @HostBinding("style.transform")
  transform: SafeStyle;

  constructor(
    private readonly el: ElementRef,
    private readonly sanitizer: DomSanitizer,
  ) {}
}
