import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-image-tagger',
  template: `
      <!--      <img [src]="src" [alt]="alt">-->
      <ngx-tagger class="image-preview-outer mt-1" *ngIf="src" [formControl]="tagControl">
          <img class="image-preview" ngxTagBase [src]="src" [alt]="alt">
      </ngx-tagger>
<!--      <pre>{{ tags | json }}</pre>-->
  `,
  styles: [`
      img {
          max-width: 100%;
      }
  `]
})
export class NgxImageTaggerComponent implements OnInit, OnDestroy {

  @Input() src;
  @Input() alt;
  @Input() tags;
  @Output() tagsChanged = new EventEmitter();

  tagControl = new FormControl();
  destroy$ = new Subject();

  constructor() {
  }

  ngOnInit() {
    this.tagControl.patchValue(this.tags);
    this.tagControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => this.tagsChanged.emit(value));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
