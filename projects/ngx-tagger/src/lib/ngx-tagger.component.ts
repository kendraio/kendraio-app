import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { TaggerInterface, TagInterface } from './interfaces';
import { TagBaseDirective } from './tag-base.directive';
import { NgxTaggerConfig } from './interfaces/ngx-tagger-config';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-tagger',
  template: `
    <ng-content></ng-content>
    <div class="tags">
      <span class="tag" [ngxTag]="tag"
            [style.border]="_config.tagBorder"
            (updateTag)="updateTag({ i: i, tag: $event })"
            *ngFor="let tag of tags; index as i"></span>
    </div>
  `,
  styles: [`
      :host {
          display: block;
          position: relative;
          user-select: none;
      }
      .tags {
          position: absolute;
          top: 0;
          left: 0;
      }
      .tag {
          display: block;
          position: absolute;
          box-sizing: border-box;
      }
  `],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NgxTaggerComponent,
    multi: true
  }]
})
export class NgxTaggerComponent implements OnInit, AfterContentInit, TaggerInterface, ControlValueAccessor {

  @Input() defaultTagSize = 90;

  _config: NgxTaggerConfig = {
    tagBorder: '3px solid blue'
  };
  @Input() set config(c: NgxTaggerConfig) {
    this._config = { ...this._config, ...c };
  };

  tags: Array<TagInterface>;

  @ContentChild(TagBaseDirective, /* TODO: add static flag */ {}) tagBase: TagBaseDirective;

  constructor() { }

  ngOnInit() {
    this.tags = [];
  }

  ngAfterContentInit() {
    this.tagBase.tagger = this;
  }

  addTag(tag: TagInterface) {
    this.tags.push(tag);
    this._changed(this.tags);
  }

  updateTag({ i, tag }) {
    this.tags[i] = tag;
    this._changed(this.tags);
  }

  _changed = (v: Array<TagInterface>) => {};
  _touched = () => {};

  registerOnChange(fn: any): void {
    this._changed = fn;
  }

  registerOnTouched(fn: any): void {
    this._touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.tags = obj;
  }


}
