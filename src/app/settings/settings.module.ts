import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export default class SettingsModule {}
