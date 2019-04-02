import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent, DialogDataDialogComponent } from './tasks/tasks.component';
import { SharedModule } from '../_shared/shared.module';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [TasksComponent, DialogDataDialogComponent],
  entryComponents: [DialogDataDialogComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class TasksModule { }
