import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesComponent } from "./messages.component";
import { RouterModule } from "@angular/router";
import { MessageService } from "../_shared/services/message.service";
import { SharedModule } from "../_shared/shared.module";
import { AppMaterialModule } from "../app-material/app-material.module";

@NgModule({
  declarations: [MessagesComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: "messages",
        component: MessagesComponent,
        outlet: "popup",
      },
    ]),
  ],
  providers: [MessageService],
})
export class MessagesModule {}
