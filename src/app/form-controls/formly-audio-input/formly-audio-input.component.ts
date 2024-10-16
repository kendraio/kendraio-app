import { Component, OnInit } from "@angular/core";
import { FieldType } from "@ngx-formly/core";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: "app-formly-audio-input",
  templateUrl: "./formly-audio-input.component.html",
  styleUrls: ["./formly-audio-input.component.scss"],
})
export class FormlyAudioInputComponent extends FieldType implements OnInit {
  clipControl = new UntypedFormControl([]);

  ngOnInit() {}
}
