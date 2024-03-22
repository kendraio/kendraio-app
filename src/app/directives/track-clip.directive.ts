import { 
  AfterViewInit, 
  Directive, 
  ElementRef, 
  EventEmitter, 
  HostBinding, 
  Input, 
  Output 
} from '@angular/core';
import * as interact_ from 'interactjs';

const interact = interact_ as any;

@Directive({
  selector: '[appTrackClip]'
})
export class TrackClipDirective implements AfterViewInit {
  @HostBinding('style.margin-left.%')
  _start = 0;

  @HostBinding('style.margin-right.%')
  _end = 0;

  @Output() clipUpdate = new EventEmitter<{ start: number, end: number }>();

  constructor(private el: ElementRef) { }
  
  ngAfterViewInit() {
    interact(this.el.nativeElement)
      .draggable({
        axis: 'x',
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        listeners: {
          move: event => {
            let { rect } = (event as any)
            event.target.style.transform = `translate(${rect.left}px, 0)`
          }
        }
      } as any)
      .resizable({
        edges: { top: false, bottom: false, left: true, right: true },
        restrictEdges: { outer: 'parent' },
        restrictSize: {
          min: { width: 200 },
        },
        listeners: {
          move: event => {
            let { x } = (event as any).target.dataset    
            x = (parseFloat(x) || 0) + (event as any).deltaRect.left
  
            Object.assign((event as any).target.style, {
              width: `${(event as any).rect.width}px`,
              transform: `translate(${x}px`
            })
    
            Object.assign(event.target.dataset, { x })
          }
        }
      } as any);
  }
}
