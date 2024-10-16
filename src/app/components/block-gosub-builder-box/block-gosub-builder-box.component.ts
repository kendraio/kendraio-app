import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { get } from "lodash-es";
import { UntypedFormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";

@Component({
  selector: "app-block-gosub-builder-box",
  templateUrl: "./block-gosub-builder-box.component.html",
  styleUrls: ["./block-gosub-builder-box.component.scss"],
})
export class BlockGosubBuilderBoxComponent implements OnInit {
  workflowCloud: any = [];
  adapters: string[] = [];
  workflows: any = {};

  filteredAdapters: Observable<String[]>;
  filteredWorkflows: Observable<string[]>;

  adapterNameFormControl: UntypedFormControl = new UntypedFormControl();
  workflowIdFormControl: UntypedFormControl = new UntypedFormControl();
  blockCommentFormControl = new UntypedFormControl();

  @Input() block;
  @Output() blockUpdated = new EventEmitter();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.adapterNameFormControl.setValue(get(this.block, "adapterName", ""));
    this.workflowIdFormControl.setValue(get(this.block, "workflowId", ""));
    this.blockCommentFormControl.setValue(get(this.block, "blockComment", ""));
    this.getData();

    this.filteredAdapters = this.adapterNameFormControl.valueChanges.pipe(
      startWith(""),
      map((val) => this.filterAdapters(val)),
    );
    this.filteredWorkflows = this.workflowIdFormControl.valueChanges.pipe(
      startWith(""),
      map((val) => this.filterWorkflows(val)),
    );
  }

  filterAdapters(val: string): string[] {
    return this.adapters.filter(
      (option) => option.toLowerCase().indexOf(val.toLowerCase()) === 0,
    );
  }

  filterWorkflows(val: string): string[] {
    const workflowAdapters = this.workflows[this.adapterNameFormControl.value];
    let filteredWorkflows = [];
    if (workflowAdapters) {
      filteredWorkflows = workflowAdapters.filter(
        (option) => option.toLowerCase().indexOf(val.toLowerCase()) === 0,
      );
    }
    return filteredWorkflows;
  }

  getUpdatedModel() {
    return {
      ...this.block,
      adapterName: this.adapterNameFormControl.value,
      workflowId: this.workflowIdFormControl.value,
      blockComment: this.blockCommentFormControl.value,
    };
  }

  getData() {
    const url = "https://app.kendra.io/api";
    this.http.get(url).subscribe((res) => {
      this.workflowCloud = res;
      this.workflowCloud.forEach((element) => {
        if (this.workflows[element.adapterName]) {
          this.workflows[element.adapterName].push(element.workflowId);
        } else {
          this.workflows[element.adapterName] = [element.workflowId];
        }
      });
      this.adapters = Object.keys(this.workflows);
    });
  }
}
