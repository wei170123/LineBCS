import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DatePipe } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule
} from '@angular/material';

import { PageFriendEffectRoutingModule } from './page-friend-effect-routing.module';
import { PageFriendEffectComponent } from './component/page-friend-effect/page-friend-effect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageFriendEffectRoutingModule,
    ChartsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [DatePipe],
  declarations: [PageFriendEffectComponent]
})
export class PageFriendEffectModule { }
