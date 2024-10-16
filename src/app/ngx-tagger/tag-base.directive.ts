import { Directive, ElementRef, HostListener } from "@angular/core";
import { TaggerInterface } from "./interfaces";

const limit = (min, max, value) => Math.max(min, Math.min(max, value));

@Directive({
  selector: "[ngxTagBase]",
})
export class TagBaseDirective {
  tagger: TaggerInterface;

  constructor(public readonly el: ElementRef) {}

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    const { offsetX, offsetY } = event;
    const tag = this.getTagPosition(
      offsetX,
      offsetY,
      this.tagger.defaultTagSize,
    );
    if (this.tagger) {
      this.tagger.addTag(tag);
    }
  }

  // noinspection JSSuspiciousNameCombination
  getTagPosition(x, y, width, height = width) {
    const { clientWidth, clientHeight } = this.el.nativeElement as HTMLElement;
    const halfWidth = width / 2.0;
    const halfHeight = height / 2.0;

    // Restrain the click position within the bounds of the target
    const xPos = limit(halfWidth, clientWidth - halfWidth, x);
    const yPos = limit(halfHeight, clientHeight - halfHeight, y);

    // Calculate top left and bottom right corners of tag region
    const topLeft = {
      x: clientWidth === 0 ? 0 : (xPos - halfWidth) / clientWidth,
      y: clientHeight === 0 ? 0 : (yPos - halfHeight) / clientHeight,
    };
    const bottomRight = {
      x: clientWidth === 0 ? 0 : (xPos + halfWidth) / clientWidth,
      y: clientHeight === 0 ? 0 : (yPos + halfHeight) / clientHeight,
    };
    return { topLeft, bottomRight };
  }
}
