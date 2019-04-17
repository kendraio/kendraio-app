import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ChannelsComponent } from './channels.component';
import { SharedModule } from '../_shared/shared.module';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [ChannelsComponent, ChannelComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
