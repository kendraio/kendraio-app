import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from "@angular/core";
import { WorkflowService } from "../../services/workflow.service";
import { PageTitleService } from "../../services/page-title.service";

@Component({
  selector: "app-workflow-sidenav",
  templateUrl: "./workflow-sidenav.component.html",
  styleUrls: ["./workflow-sidenav.component.scss"],
})
export class WorkflowSidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter();

  @HostBinding("style.width.px")
  width = 500;

  isExpanded = false;

  constructor(public readonly workflow: WorkflowService) {}

  ngOnInit() {}

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.width = this.isExpanded ? 800 : 500;
  }
}
