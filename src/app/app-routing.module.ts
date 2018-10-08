import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
// import { TestComponent } from './page/test/test.component';

import { AuthGuardService } from './service/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },

  {
    path: 'bcs',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      // { path: "friend", component: TestComponent },
      {
        path: 'groupList',
        loadChildren: './page/page-group-list/page-group-list.module#PageGroupListModule'
      },
      {
        path: 'groupCreate',
        loadChildren: './page/page-group-create/page-group-create.module#PageGroupCreateModule'
      },
      {
        path: 'msgList',
        loadChildren: './page/page-msg-list/page-msg-list.module#PageMsgListModule'
      },
      {
        path: 'msgSending',
        loadChildren: './page/page-msg-sending/page-msg-sending.module#PageMsgSendingModule'
      },
      {
        path: 'friendList',
        loadChildren: './page/page-friend-list/page-friend-list.module#PageFriendListModule'
      },
      {
        path: 'sendingInfo',
        loadChildren: './page/page-sending-info/page-sending-info.module#PageSendingInfoModule'
      }
    ]
  }
  // { path: 'friend', component: TestComponent, canActivate: [AuthGuardService] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
