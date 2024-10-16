import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import JSONFormatter from "json-formatter-js";
import { clone, get, set, isArray, isObject } from "lodash-es";
import { SharedStateService } from "src/app/services/shared-state.service";
import { mappingUtility } from "../mapping-block/mapping-util";
@Component({
  selector: "app-debug-block",
  templateUrl: "./debug-block.component.html",
  styleUrls: ["./debug-block.component.scss"],
})
export class DebugBlockComponent implements OnInit, OnChanges {
  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @ViewChild("modelOutput") modelOutput: ElementRef;

  @Output() output = new EventEmitter();

  open = 1;
  showData = true;
  showContext = false;
  showState = false;
  consoleLog = false;
  consoleLabel = "debug block";
  enabledGetter = null;
  enabled = true;

  constructor(
    private readonly zone: NgZone,
    private stateService: SharedStateService,
  ) {
    stateService.state$.subscribe((state) => {
      setTimeout(() => {
        this.setEnabled();
        this.updateOutputDisplay();
      });
    });
  }

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    this.open = get(this.config, "open", 1);
    this.showData = get(this.config, "showData", true);
    this.showContext = get(this.config, "showContext", false);
    this.showState = get(this.config, "showState", false);
    this.consoleLog = get(this.config, "consoleLog", false);
    this.consoleLabel = get(this.config, "consoleLabel", "debug block");
    this.enabledGetter = get(this.config, "enabledGetter", null);
    this.setEnabled();
    this.updateOutputDisplay();
    this.output.emit(clone(this.model));
  }

  setEnabled() {
    if (this.enabledGetter !== null) {
      this.enabled = mappingUtility(
        {
          data: this.model,
          context: this.context,
          state: this.stateService.state,
        },
        this.enabledGetter,
      );
    }
  }

  updateOutputDisplay() {
    if (this.enabled) {
      setTimeout(() => {
        this.zone.run(() => {
          if (!!this.modelOutput) {
            // Replace #modelOutput DIV contents with formatted JSON
            //const debugData = this.showContext ? { data: this.model, context: this.context, shared: this.sharedContext._context } : this.model;
            let debugData = {};
            this.showData && set(debugData, "data", this.model);
            this.showContext && set(debugData, "context", this.context);
            this.showState && set(debugData, "state", this.stateService.state);

            const formatter = new JSONFormatter(debugData, this.open);
            while (this.modelOutput.nativeElement.firstChild) {
              this.modelOutput.nativeElement.removeChild(
                this.modelOutput.nativeElement.firstChild,
              );
            }
            this.modelOutput.nativeElement.append(formatter.render());
            if (this.consoleLog) {
              console.log(
                this.consoleLabel,
                this.model,
                this.context,
                this.stateService.state,
              );
            }
          } else {
            console.log("Debug output DIV not available", this.model);
          }
        });
      }, 40);
    }
  }
}
