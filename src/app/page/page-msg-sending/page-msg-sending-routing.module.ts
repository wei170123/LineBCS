import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageMsgSendingComponent } from './component/page-msg-sending.component';

const routes: Routes = [
  { path: '', component: PageMsgSendingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMsgSendingRoutingModule { }
