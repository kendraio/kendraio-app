import { Component } from "@angular/core";
import { BaseBlockComponent } from "../base-block/base-block.component";
import { get } from "lodash-es";
import { mappingUtility } from "../mapping-block/mapping-util";

@Component({
  selector: "app-link-action",
  templateUrl: "./link-action.component.html",
  styleUrls: ["./link-action.component.scss"],
})
export class LinkActionComponent extends BaseBlockComponent {
  linkUrl = "";
  label = "";
  adapterNameGetter = "";
  workflowIdGetter = "";
  config: any;

  constructor() {
    super();
  }

  private generateLinkUrl() {
    let resolvedAdapterName = get(this.config, "adapterName", "");
    let resolvedWorkflowId = get(this.config, "workflowId", "");

    if (this.adapterNameGetter) {
      resolvedAdapterName = mappingUtility(
        { data: this.model, context: this.context },
        this.adapterNameGetter,
      );
    }

    if (this.workflowIdGetter) {
      resolvedWorkflowId = mappingUtility(
        { data: this.model, context: this.context },
        this.workflowIdGetter,
      );
    }

    this.linkUrl = `/${resolvedAdapterName}/${resolvedWorkflowId}`;
  }

  onConfigUpdate(config: any) {
    this.label = get(config, "label", "Open Flow");
    this.adapterNameGetter = get(config, "adapterNameGetter", "");
    this.workflowIdGetter = get(config, "workflowIdGetter", "");
    this.config = config;
    this.generateLinkUrl();
  }

  async onData(data: any, _firstChange: boolean) {
    this.model = data;
    this.generateLinkUrl();
  }
}
