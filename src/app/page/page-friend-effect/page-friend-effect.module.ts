import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFriendEffectRoutingModule } from './page-friend-effect-routing.module';
import { PageFriendEffectComponent } from './component/page-friend-effect/page-friend-effect.component';

@NgModule({
  imports: [
    CommonModule,
    PageFriendEffectRoutingModule
  ],
  declarations: [PageFriendEffectComponent]
})
export class PageFriendEffectModule { }
