import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSportDiaryRoutingModule } from './page-sport-diary-routing.module';
import { PageSportDiaryComponent } from './component/main/page-sport-diary/page-sport-diary.component';
import { PageSportDiaryDetailComponent } from './component/detail/page-sport-diary-detail/page-sport-diary-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PageSportDiaryRoutingModule
  ],
  declarations: [PageSportDiaryComponent, PageSportDiaryDetailComponent]
})
export class PageSportDiaryModule { }
