import { 
  Directive, 
  ElementRef, 
  EventEmitter, 
  HostBinding, 
  Output 
} from '@angular/core';
import * as interact_ from 'interactjs';

const interact = interact_ as any;

@Directive({
  selector: '[appTrackClip]'
})
export class TrackClipDirective {
  @HostBinding('style.margin-left.%')
  _start = 0;

  @HostBinding('style.margin-right.%')
  _end = 0;

  @Output() clipUpdate = new EventEmitter<{ start: number, end: number }>();

  constructor(private el: ElementRef) { }
  
  ngOnInit() {
    interact(this.el.nativeElement)
      .draggable({
        axis: 'x',
        restrict: {
          restriction: 'parent',
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        listeners: {
          move: event => {
            let { target, delta } = (event as any)
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + delta.x;
            target.style.transform = `translate(${x}px)`;
            
            target.setAttribute('data-x', x.toString());
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
              transform: `translate(${x}px, 0)`
            })
            Object.assign(event.target.dataset, { x })
          }
        }
      } as any);
  }
}
