import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'select-tags',
    changeDetection: ChangeDetectionStrategy.Default,
    template: `
        <label>{{to.label}}</label>
 
        <ng-select [items]="[]"
                   [addTag]="true"
                   [multiple]="true"
                   [selectOnTab]="true"
                   [isOpen]="false">
        </ng-select>
             <mat-hint> {{ to.description }} </mat-hint>
    `
})
export class SelectTagsComponent  extends FieldType  {

    loading = false;


    ngOnInit() {
    }
    addTag(name) {
        return { name: name, tag: true };
    }
}