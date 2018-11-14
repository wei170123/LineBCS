import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLinkEffectRoutingModule } from './page-link-effect-routing.module';
import { PageLinkEffectComponent } from './component/page-link-effect/page-link-effect.component';

@NgModule({
  imports: [
    CommonModule,
    PageLinkEffectRoutingModule
  ],
  declarations: [PageLinkEffectComponent]
})
export class PageLinkEffectModule { }
