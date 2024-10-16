import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import * as interact_ from "interactjs";
const interact = interact_ as any;
import { TagInterface } from "./tag.interface";
import { NgxTaggerComponent } from "./ngx-tagger.component";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[ngxTag]",
})
export class TagDirective implements OnChanges, AfterViewInit {
  @Input("ngxTag") tag: TagInterface;
  @Output() updateTag = new EventEmitter<TagInterface>();

  @HostBinding("style.width.px")
  _w = 0;

  @HostBinding("style.height.px")
  _h = 0;

  _x = 0;
  _y = 0;

  @HostBinding("style.transform")
  _xy = "";

  constructor(
    private readonly el: ElementRef,
    private readonly parent: NgxTaggerComponent,
  ) {}

  ngAfterViewInit() {
    interact(this.el.nativeElement)
      .draggable({
        restrict: {
          restriction: () => this.parent.tagBase.el.nativeElement,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        },
        onmove: (event) => {
          const { dx, dy } = event;
          this._x += dx;
          this._y += dy;
          this._xy = `translate(${this._x}px, ${this._y}px)`;
        },
        onend: () => this.tagUpdated(),
      })
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },
        // minimum size
        restrictSize: {
          min: { width: 50, height: 50 },
        },
        // keep the edges inside the parent
        restrictEdges: {
          outer: this.parent.tagBase.el.nativeElement,
          endOnly: false,
        },
        onmove: (event) => {
          this._w = (event as any).rect.width;
          this._h = (event as any).rect.height;
          this._x += (event as any).deltaRect.left;
          this._y += (event as any).deltaRect.top;
          this._xy = `translate(${this._x}px, ${this._y}px)`;
        },
        onend: () => this.tagUpdated(),
      } as any);
  }

  tagUpdated() {
    const tag = this.parent.tagBase.getTagPosition(
      this._x + this._w / 2.0,
      this._y + this._h / 2.0,
      this._w,
      this._h,
    );
    this.updateTag.emit({ ...tag, data: this.tag.data });
  }

  ngOnChanges(changes: SimpleChanges) {
    const w = this.tag.bottomRight.x - this.tag.topLeft.x;
    const h = this.tag.bottomRight.y - this.tag.topLeft.y;
    this._w = w * this.parent.tagBase.el.nativeElement.clientWidth;
    this._h = h * this.parent.tagBase.el.nativeElement.clientHeight;

    this._x =
      this.tag.topLeft.x * this.parent.tagBase.el.nativeElement.clientWidth;
    this._y =
      this.tag.topLeft.y * this.parent.tagBase.el.nativeElement.clientHeight;
    this._xy = `translate(${this._x}px, ${this._y}px)`;
  }
}
