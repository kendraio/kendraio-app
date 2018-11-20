import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, Output } from "@angular/core";
import { Subject } from "rxjs";
import * as interact from 'interactjs';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements AfterViewInit, OnDestroy {

  private destroy$ = new Subject<void>();

  @Output() updatePosition = new EventEmitter();

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone
  ) {
  }

  public ngAfterViewInit(): void {
    interact(this.elementRef.nativeElement)
      .draggable({
        restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        autoScroll: true,
        onmove: (event) => {
          // console.log(event.pageX, event.pageY);
          var target = event.target as any,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

          // update the position attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);

          this.updatePosition.emit({ x, y });
        },
        onend: (event) => {
          // console.log(event);
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

}
