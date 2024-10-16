import { Component } from "@angular/core";
import { BaseBlockComponent } from "../base-block/base-block.component";
import { clone, get, set, has } from "lodash-es";
import * as uuid from "uuid";
import { mappingUtility } from "../mapping-block/mapping-util";
import { SharedStateService } from "src/app/services/shared-state.service";

@Component({
  selector: "app-context-save-block",
  templateUrl: "./context-save-block.component.html",
  styleUrls: ["./context-save-block.component.scss"],
})
export class ContextSaveBlockComponent extends BaseBlockComponent {
  key = "saved";
  valueGetter = "data";
  keyGetter = "";
  skipFirst = false;
  state = false; // force to shared context

  constructor(private stateService: SharedStateService) {
    super();
  }

  onConfigUpdate(config: any) {
    if (has(config, "key")) {
      this.key = get(config, "key", "saved");
    } else {
      this.key = get(config, "contextKey", "saved");
    }
    this.valueGetter = get(config, "valueGetter", "data");
    this.keyGetter = get(config, "keyGetter", "");
    this.state = get(config, "state", "");
    this.skipFirst = get(config, "skipFirst", false);
  }

  onData(data: any, firstChange: boolean) {
    if ((firstChange && this.skipFirst) || data == null) {
      return;
    }

    const value = mappingUtility(
      { data, context: this.context, state: this.stateService.state },
      this.valueGetter,
    );
    let key = this.key;

    if (this.keyGetter.length > 0) {
      key = mappingUtility(
        { data, context: this.context, state: this.stateService.state },
        this.keyGetter,
      );
    }

    if (key) {
      if (key.startsWith("state.") || this.state) {
        if (key.startsWith("state.")) key = key.substring(6);
        this.stateService.setValue(key, value);
      } else {
        set(this.context, key, value);
      }
      this.context.__key = uuid.v4();
    }
    this.output.emit(clone(data));
  }
}
