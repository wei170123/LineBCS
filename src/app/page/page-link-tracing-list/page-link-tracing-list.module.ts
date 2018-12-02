import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule
} from '@angular/material';

import { PageLinkTracingListRoutingModule } from './page-link-tracing-list-routing.module';
import { PageLinkTracingListComponent } from './component/page-link-tracing-list/page-link-tracing-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    PageLinkTracingListRoutingModule
  ],
  declarations: [PageLinkTracingListComponent]
})
export class PageLinkTracingListModule { }
