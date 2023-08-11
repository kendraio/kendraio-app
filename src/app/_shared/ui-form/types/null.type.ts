import { Component, Input, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { indexOf } from 'lodash-es';

@Component({
    selector: 'app-null-type',
    template: `
  <div>
  <label style="margin-right:16px" *ngIf="to.label && formControl.value?.toString()">{{ to.label }}</label>

   <b><span *ngIf="!isUrl" [innerHtml]="text"></span></b>

    <a *ngIf="isUrl" target="_blank" [href]="text">{{cleanUrl(text)}}</a>

    <p class="small" small *ngIf="to.description && formControl.value">{{ to.description }}</p>
    </div>
  `,
})
export class NullTypeComponent extends FieldType implements OnInit {
    @Input()
    private _formControl: any;
    public get formControl() {
        return this._formControl;
    }
    public set formControl(value) {
        this._formControl = value;
    }
    imgId: any;
    text: any;
    imgProps: {};
    text2: string;
    isUrl: boolean;

    ngOnInit() {
        this.text = this.formControl.value;
        if (this.formControl.value) {
            this.isUrl = this.formControl.value.toString().indexOf('http') > -1;
        }

        this.text2 = this.to.description;


    }
    cleanUrl(urlStr: string) {
        return urlStr.split('/')[2];
        }
}

