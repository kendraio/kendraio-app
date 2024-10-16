import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "select-tags",
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <label></label>
    <ng-select
      [items]="[]"
      placeholder="{{ to.label }}"
      [addTag]="true"
      [multiple]="true"
      [selectOnTab]="true"
      [isOpen]="false"
      [formControl]="formControl"
    >
    </ng-select>
    <mat-hint> {{ to.description }} </mat-hint>
  `,
})
export class SelectTagsComponent extends FieldType implements OnInit {
  loading = false;

  ngOnInit() {}
  addTag(name) {
    return { name: name, tag: true };
  }
}
