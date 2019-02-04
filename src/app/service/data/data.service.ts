import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LineUserModel } from '../../model/friendList-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getFriendList() {
    return this.http.get<LineUserModel[]>(environment.bcs + '/bcs/data/friendList');
  }

  public sportDiaryListByUID(uid: string) {
    return this.http.get<any[]>(environment.bcs + '/bcs/data/sportDiaryList?uid=' + uid);
  }

  public selfSportListByUID(uid: string) {
    return this.http.get<any[]>(environment.bcs + '/bcs/data/sportsList?uid=' + uid + "&bodyType=SELF");
  }

  public deleteSelfSportListByUID(sportId: string): Observable<any> {
    var data = {
      id: sportId
    }
    return this.http.post<any[]>(environment.bcs + '/bcs/sports/delete', data);
  }
}
