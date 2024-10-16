import { Component, OnInit } from "@angular/core";
import { FieldArrayType, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-formly-card-list",
  templateUrl: "./formly-card-list.component.html",
  styleUrls: ["./formly-card-list.component.scss"],
})
export class FormlyCardListComponent
  extends FieldArrayType<FormlyFieldConfig>
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit() {}
}
