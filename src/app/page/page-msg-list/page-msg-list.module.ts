import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatDividerModule
} from '@angular/material';

import { PageMsgListRoutingModule } from './page-msg-list-routing.module';
import { PageMsgListComponent } from './component/page-msg-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    PageMsgListRoutingModule
  ],
  declarations: [PageMsgListComponent]
})
export class PageMsgListModule { }
