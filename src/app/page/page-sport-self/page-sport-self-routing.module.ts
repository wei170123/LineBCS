import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSportSelfComponent } from './component/page-sport-self/page-sport-self.component';
import { PageSportSelfCreateComponent } from './component/page-sport-self-create/page-sport-self-create.component';

const routes: Routes = [
  { path: 'self', component: PageSportSelfComponent },
  { path: 'selfCreate/:uid/:name', component: PageSportSelfCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSportSelfRoutingModule { }
