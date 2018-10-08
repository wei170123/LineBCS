import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSendingInfoComponent } from './component/page-sending-info.component';

const routes: Routes = [
  { path: '', component: PageSendingInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSendingInfoRoutingModule { }
