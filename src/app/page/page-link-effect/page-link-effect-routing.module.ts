import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLinkEffectComponent } from './component/page-link-effect/page-link-effect.component';

const routes: Routes = [
  { path: '', component: PageLinkEffectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLinkEffectRoutingModule { }
