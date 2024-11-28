import { Component, EventEmitter, OnDestroy, OnInit, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { Subject } from 'rxjs';
import { takeUntil, startWith, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'kendra-field-typeahead',
  template: `


        <ng-select [items]="to.options"
                   [bindLabel]="labelProp"
                   [bindValue]="valueProp"
                   [placeholder]="to.label"
                   [(ngModel)]="selectedCity"
                   >
                       <ng-template ng-option-tmp let-item="item" let-index="index">
                            <img width="20"  src="https://flags.fmcdn.net/data/flags/h40/{{item.alpha2.toLowerCase()}}.png"/>
                            <b> {{item.name}}</b>  ({{item.alpha2}})
                      </ng-template>
        </ng-select>
    `,
  styleUrls: ['./typeahead.component.scss'],
})
export class KendraFieldTypeahead extends FieldType<any> implements OnDestroy, OnInit {
  get isMultiSelect(): boolean { return this.to.isMultiSelect || false; }
  get labelProp(): string { return this.to.labelProp || 'name'; }
  get valueProp(): string { return this.to.valueProp || 'id'; }
  get groupProp(): string { return this.to.groupProp || 'group'; }

  @Input() data: [];


  onDestroy$ = new Subject<void>();
  search$ = new EventEmitter();
  options$;
 selectedCity: string;

  ngOnInit() {
    // this.options$ = this.search$.pipe(
    //   takeUntil(this.onDestroy$),
    //   startWith(''),
    //   filter(v => v !== null),
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   switchMap(this.to.search$),
    // );

    // this.options$.subscribe();
  }

  ngOnDestroy() {
    this.onDestroy$.complete();
  }
}
