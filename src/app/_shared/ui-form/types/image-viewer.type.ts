import { Component, Input, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'app-thumbnail-viewer',
  template: `

  <mat-card appearance="outlined" *ngIf="formControl.value" style="float:left;margin-right:32px" >
  <mat-card-header>
    <mat-label>{{to.label}}</mat-label>
  </mat-card-header>
  <mat-card-content>

<div>

<img src="{{imgUrl}}">

</div>

</mat-card-content>
</mat-card>

 `,
})

export class ImageViewerComponent extends FieldType implements OnInit {
    @Input()
    private _formControl: any;
    public get formControl() {
        return this._formControl;
    }
    public set formControl(value) {
        this._formControl = value;
    }
  imgId: any;
  imgUrl: any;
 imgProps: {};

  ngOnInit() {
    this.imgUrl = this.formControl.value;
  }


}
