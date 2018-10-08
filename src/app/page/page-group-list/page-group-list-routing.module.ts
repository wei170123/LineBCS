import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGroupListComponent } from './component/page-group-list.component';

const routes: Routes = [
  { path: '', component: PageGroupListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageGroupListRoutingModule { }
