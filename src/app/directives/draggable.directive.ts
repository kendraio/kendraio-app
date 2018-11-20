import { AfterViewInit, Directive, ElementRef, Input, NgZone, OnDestroy } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { Subject } from "rxjs";
import { map, switchMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements AfterViewInit, OnDestroy {

  @Input() dragHandle: string;
  @Input() dragTarget: string;

  // Element to be dragged
  private target: HTMLElement;
  // Drag handle
  private handle: HTMLElement;
  private delta = {x: 0, y: 0};
  private offset = {x: 0, y: 0};

  private destroy$ = new Subject<void>();

  constructor(private elementRef: ElementRef, private zone: NgZone) {
  }

  public ngAfterViewInit(): void {
    this.handle = this.dragHandle ? document.querySelector(this.dragHandle) as HTMLElement :
      this.elementRef.nativeElement;
    this.target = document.querySelector(this.dragTarget) as HTMLElement;
    this.setupEvents();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private setupEvents() {
    this.zone.runOutsideAngular(() => {
      let mousedown$ = fromEvent(this.handle, 'mousedown');
      let mousemove$ = fromEvent(document, 'mousemove');
      let mouseup$ = fromEvent(document, 'mouseup');

      let mousedrag$ = mousedown$.pipe(
        switchMap((event: MouseEvent) => {
          let startX = event.clientX;
          let startY = event.clientY;

          return mousemove$.pipe(
            map((event: MouseEvent) => {
              event.preventDefault();
              this.delta = {
                x: event.clientX - startX,
                y: event.clientY - startY
              };
            }),
            takeUntil(mouseup$));
        }),
        takeUntil(this.destroy$)
      );

      mousedrag$.subscribe(() => {
        if (this.delta.x === 0 && this.delta.y === 0) {
          return;
        }

        this.translate();
      });

      mouseup$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.offset.x += this.delta.x;
        this.offset.y += this.delta.y;
        this.delta = {x: 0, y: 0};
      });
    });
  }

  private translate() {
    requestAnimationFrame(() => {
      this.target.style.transform = `
        translate(${this.offset.x + this.delta.x}px,
                  ${this.offset.y + this.delta.y}px)
      `;
    });
  }
}
