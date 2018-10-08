import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageGroupListRoutingModule } from './page-group-list-routing.module';
import { PageGroupListComponent } from './component/page-group-list.component';

@NgModule({
  imports: [
    CommonModule,
    PageGroupListRoutingModule
  ],
  declarations: [PageGroupListComponent]
})
export class PageGroupListModule { }
