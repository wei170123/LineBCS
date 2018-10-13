import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatDatepickerModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

import { PageMsgSendingRoutingModule } from './page-msg-sending-routing.module';
import { PageMsgSendingComponent } from './component/page-msg-sending.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    PageMsgSendingRoutingModule
  ],
  declarations: [PageMsgSendingComponent]
})
export class PageMsgSendingModule { }
