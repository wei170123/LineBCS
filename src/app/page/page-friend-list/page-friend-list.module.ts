import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

import { PageFriendListComponent } from './component/page-friend-list.component';
import { PageFriendListRoutingModule } from './page-friend-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    PageFriendListRoutingModule
  ],
  declarations: [
    PageFriendListComponent
  ]
})
export class PageFriendListModule { }
