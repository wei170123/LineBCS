import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFriendListComponent } from './page-friend-list.component';
import { PageFriendListRoutingModule } from './page-friend-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageFriendListRoutingModule
  ],
  declarations: [
    PageFriendListComponent
  ]
})
export class PageFriendListModule { }
