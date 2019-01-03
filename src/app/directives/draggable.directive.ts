import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, Output } from "@angular/core";
import { Subject } from "rxjs";
import * as interact from 'interactjs';
import { DatabaseService } from '../services/database.service';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements AfterViewInit, OnDestroy {

  private destroy$ = new Subject<void>();

  @Input() tag;
  @Output() updatePosition = new EventEmitter();
  @Input() imageElement;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private readonly database: DatabaseService
  ) {
  }

  public ngAfterViewInit(): void {
    this.database.get(this.tag).pipe(filter(Boolean)).subscribe(({ hitX, hitY }) => {
      const el = this.elementRef.nativeElement;
      const x = hitX * this.imageElement.clientWidth;
      const y = hitY * this.imageElement.clientHeight;
      el.style.webkitTransform =
        el.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
      el.setAttribute('data-x', x);
      el.setAttribute('data-y', y);
    });
    interact(this.elementRef.nativeElement)
      .draggable({
        restrict: {
          // restriction: "parent",
          restriction: this.imageElement,
          endOnly: false,
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

          this.zone.run(() => {
            this.updatePosition.emit({ x, y });
          });
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
