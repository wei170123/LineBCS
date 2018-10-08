import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageMsgListComponent } from './component/page-msg-list.component';

const routes: Routes = [
  { path: '', component: PageMsgListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageMsgListRoutingModule { }
