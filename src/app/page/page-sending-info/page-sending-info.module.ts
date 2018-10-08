import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSendingInfoComponent } from './component/page-sending-info.component';
import { PageSendingInfoRoutingModule } from './page-sending-info-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageSendingInfoRoutingModule
  ],
  declarations: [PageSendingInfoComponent]
})
export class PageSendingInfoModule { }
