import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLinkTracingListComponent } from './component/page-link-tracing-list/page-link-tracing-list.component';

const routes: Routes = [
  { path: '', component: PageLinkTracingListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLinkTracingListRoutingModule { }
