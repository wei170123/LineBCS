import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GroupModel } from '../../model/group-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public createGroup(group: GroupModel): Observable<any> {
    let base = this.http.post(environment.bcs + '/bcs/group/createGroup', group);

    const request = base.pipe(
      map((data: string) => {
        return data;
      })
    );

    return request;
  }

}
