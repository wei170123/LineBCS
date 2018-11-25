import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';

import { PageFriendEffectRoutingModule } from './page-friend-effect-routing.module';
import { PageFriendEffectComponent } from './component/page-friend-effect/page-friend-effect.component';

@NgModule({
  imports: [
    CommonModule,
    PageFriendEffectRoutingModule,
    ChartsModule,
    FlexLayoutModule
  ],
  declarations: [PageFriendEffectComponent]
})
export class PageFriendEffectModule { }
