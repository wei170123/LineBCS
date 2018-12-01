import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogLineUserService {

  constructor(private http: HttpClient) { }

  public getEffectFriend() {
    return this.http.get<any>(environment.bcs + '/bcs/logLineUser/effectFriend');
  }

  public getNewFriend(startDate, endDate) {
    return this.http.get<any>(environment.bcs + '/bcs/logLineUser/newFriend?startDate=' + startDate + "&endDate=" + endDate);
  }

  public getNewFriendArrayData(startDate, endDate) {
    return this.http.get<any>(environment.bcs + '/bcs/logLineUser/newFriendArrayData?startDate=' + startDate + "&endDate=" + endDate);
  }

  public getBlockFriend() {
    return this.http.get<any[]>(environment.bcs + '/bcs/msg/msgList');
  }


}
