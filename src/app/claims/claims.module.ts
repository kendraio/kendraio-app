import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AppMaterialModule } from '../app-material/app-material.module';

import { ClaimsRoutingModule } from './claims-routing.module';
import { IndexComponent } from './index/index.component';
// import { SendClaimsComponent } from './send-claims/send-claims.component';
// import { MatButtonModule,  MatButton } from '@angular/material';
// import {MatDialogModule} from '@angular/material';
import { SharedModule } from '../_shared/shared.module';
// import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [IndexComponent, 
    // SendClaimsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClaimsRoutingModule,
    // FlexLayoutModule
    // AppMaterialModule,
    // MatButtonModule,
    // MatDialogModule
  ],
  entryComponents: [   
  //  SendClaimsComponent
  ]
})
export class ClaimsModule { }
