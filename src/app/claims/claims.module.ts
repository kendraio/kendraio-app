import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ClaimsRoutingModule
  ]
})
export class ClaimsModule { }
