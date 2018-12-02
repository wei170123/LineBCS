import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLinkTracingCreateComponent } from './component/page-link-tracing-create/page-link-tracing-create.component';

const routes: Routes = [
  { path: '', component: PageLinkTracingCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLinkTracingCreateRoutingModule { }
