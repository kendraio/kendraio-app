import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { IndexComponent } from './index/index.component';
import { SendClaimsComponent } from './send-claims/send-claims.component';

@NgModule({
  declarations: [IndexComponent, SendClaimsComponent],
  imports: [
    CommonModule,
    ClaimsRoutingModule
  ]
})
export class ClaimsModule { }
