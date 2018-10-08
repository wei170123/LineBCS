import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGroupCreateComponent } from './component/page-group-create.component';

const routes: Routes = [
  { path: '', component: PageGroupCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageGroupCreateRoutingModule { }
