import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFriendListComponent } from './page-friend-list.component';

const routes: Routes = [
  { path: '', component: PageFriendListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFriendListRoutingModule { }
