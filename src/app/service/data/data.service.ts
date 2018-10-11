import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
