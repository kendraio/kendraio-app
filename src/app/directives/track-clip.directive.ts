import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as interact from 'interactjs';

@Directive({
  selector: '[appTrackClip]'
})
export class TrackClipDirective implements AfterViewInit, OnChanges {

  @Input('appTrackClip') clip;

  @HostBinding('style.margin-left.%')
  _start = 0;

  @HostBinding('style.margin-right.%')
  _end = 0;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    // console.log({ changes });
    const { clip: { currentValue: { start, end } }} = changes;
    this.setStart(start);
    this.setEnd(end);
  }

  setStart(startPercent) {
    this._start = startPercent;
  }

  setEnd(endPercent) {
    this._end = (100 - endPercent);
  }

  ngAfterViewInit() {
    interact(this.el.nativeElement)
      .draggable({
        axis: 'x',
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        onmove: event => {
          const { dx } = event;
          const node = this.el.nativeElement as HTMLLIElement;
          const { clientWidth } = node.parentElement;
          this._start += (dx / clientWidth) * 100;
          this._end -= (dx / clientWidth) * 100;
        }
      } as any)
      .resizable({
        edges: { top: false, bottom: false, left: true, right: true },
        restrictEdges: { outer: 'parent' },
        restrictSize: {
          min: { width: 50, height: 19 },
        },
        onmove: event => {
          const w = (event as any).rect.width;
          const dx = (event as any).deltaRect.left;

          const node = this.el.nativeElement as HTMLLIElement;
          const { clientWidth } = node.parentElement;

          this._start += (dx / clientWidth) * 100;
          this.setEnd(this._start + (w / clientWidth) * 100);
        },
      } as any);
  }

}
