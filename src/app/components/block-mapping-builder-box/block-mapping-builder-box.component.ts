import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { get } from "lodash-es";
import { UntypedFormControl } from "@angular/forms";

@Component({
  selector: "app-block-mapping-builder-box",
  templateUrl: "./block-mapping-builder-box.component.html",
  styleUrls: ["./block-mapping-builder-box.component.scss"],
})
export class BlockMappingBuilderBoxComponent implements OnInit {
  editorOptions = {
    baseUrl: "blocks-builder",
    theme: "vs",
    language: "graphql",
    minimap: {
      enabled: false,
    },
    lineNumbers: "off",
    scrollBeyondLastLine: false,
    automaticLayout: true,
  };

  @Input() block;
  @Output() updateBlock = new EventEmitter();
  mappingModel = "";
  blockCommentFormControl = new UntypedFormControl();

  constructor() {}

  ngOnInit() {
    this.mappingModel = get(this.block, "mapping", "");
    this.blockCommentFormControl.setValue(get(this.block, "blockComment", ""));
  }

  getUpdatedModel() {
    return {
      ...this.block,
      mapping: this.mappingModel,
      blockComment: this.blockCommentFormControl.value,
    };
  }
}
