import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSportDiaryComponent } from './component/main/page-sport-diary/page-sport-diary.component';
import { PageSportDiaryDetailComponent } from './component/detail/page-sport-diary-detail/page-sport-diary-detail.component';

const routes: Routes = [
  { path: '', component: PageSportDiaryComponent },
  { path: 'detail', component: PageSportDiaryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSportDiaryRoutingModule { }
