import { ChangeDetectorRef, Component, NgZone } from "@angular/core";
import { BaseBlockComponent } from "../base-block/base-block.component";
import { WorkflowRepoService } from "../../services/workflow-repo.service";
import { get } from "lodash";
import { mappingUtility } from "../mapping-block/mapping-util";

@Component({
  selector: "app-gosub-block",
  templateUrl: "./gosub-block.component.html",
  styleUrls: ["./gosub-block.component.scss"],
})
export class GosubBlockComponent extends BaseBlockComponent {
  blocks = [];
  subModels = [];

  adapterName;
  workflowId;
  isLoading = true;
  hasError = false;
  errorMessage = "";
  configGetter;
  contextGetter;
  modelGetter;

  constructor(
    private readonly repo: WorkflowRepoService,
    private readonly zone: NgZone,
    private readonly cd: ChangeDetectorRef,
  ) {
    super();
  }

  onConfigUpdate(config: any) {
    this.adapterName = get(config, "adapterName");
    this.workflowId = get(config, "workflowId");
    this.configGetter = get(config, "configGetter");
    this.contextGetter = get(config, "contextGetter");
    this.modelGetter = get(config, "modelGetter");
  }

  onData(data: any, firstChange: boolean) {
    if (this.configGetter) {
      const { adapterName, workflowId } = mappingUtility(
        { data: this.model, context: this.context },
        this.configGetter,
      );
      this.doLoad(adapterName, workflowId);
    } else {
      this.doLoad(this.adapterName, this.workflowId);
    }
  }

  doLoad(adapterName, workflowId) {
    if (adapterName && workflowId) {
      this.isLoading = true;
      if (this.contextGetter) {
        this.context = mappingUtility(
          { data: this.model, context: this.context },
          this.contextGetter,
        );
      }
      let model = this.model;
      if (this.modelGetter) {
        model = mappingUtility(
          { data: this.model, context: this.context },
          this.modelGetter,
        );
      }
      this.repo
        .getBlocks(adapterName, workflowId)
        .toPromise()
        .then(({ blocks }) => {
          this.zone.run(() => {
            this.isLoading = false;
            this.blocks = [...blocks];
            this.subModels = [model, ...blocks.map(() => ({}))];
            this.cd.markForCheck();
          });
        })
        .catch((err) => {
          this.hasError = true;
          this.errorMessage = "Error loading workflow: " + err.message;
          this.isLoading = false;
        });
    }
  }

  onWorkflowComplete(event) {
    this.output.emit(event);
  }
}
