import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LineUserDetails } from '../../model/friendList-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getFriendList() {
    // return this.http.get<LineUserDetails[]>(environment.bcs + '/bcs/data/friendList');
    this.http.get<LineUserDetails[]>(environment.bcs + '/bcs/data/friendList')
      .subscribe(
        x => {
          console.log(x);
          return x;
        }
      );
  }
}
