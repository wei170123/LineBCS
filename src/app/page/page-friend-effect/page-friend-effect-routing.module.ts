import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFriendEffectComponent } from './component/page-friend-effect/page-friend-effect.component';

const routes: Routes = [
  { path: '', component: PageFriendEffectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFriendEffectRoutingModule { }
