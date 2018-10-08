import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageMsgSendingRoutingModule } from './page-msg-sending-routing.module';
import { PageMsgSendingComponent } from './component/page-msg-sending.component';

@NgModule({
  imports: [
    CommonModule,
    PageMsgSendingRoutingModule
  ],
  declarations: [PageMsgSendingComponent]
})
export class PageMsgSendingModule { }
