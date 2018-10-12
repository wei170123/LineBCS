import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule
} from '@angular/material';

import { PageGroupListRoutingModule } from './page-group-list-routing.module';
import { PageGroupListComponent } from './component/page-group-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    PageGroupListRoutingModule
  ],
  declarations: [PageGroupListComponent]
})
export class PageGroupListModule { }
