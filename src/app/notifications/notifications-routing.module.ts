import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as pages from "./";

const routes: Routes = [
  {
    path: "",
    component: pages.NotificationsComponent,
    data: {
      breadcrumb: "",
      menuLabel: "",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
