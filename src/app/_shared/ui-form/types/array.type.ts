import { Component } from "@angular/core";
import { FieldArrayType } from "@ngx-formly/core";

@Component({
  selector: "formly-array-type",
  templateUrl: "array.type.html",
  styleUrls: ["array.type.scss"],
})
export class ArrayTypeComponent extends FieldArrayType {
  // TODO: add explicit constructor
  constructor() {
    super();
  }
}
