import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSportSelfListComponent } from './component/page-sport-self-list/page-sport-self-list.component';
import { PageSportSelfDetailComponent } from './component/page-sport-self-detail/page-sport-self-detail.component';

const routes: Routes = [
  { path: '', component: PageSportSelfListComponent },
  { path: 'detail/:uid/:name', component: PageSportSelfDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSportSelfListRoutingModule { }
