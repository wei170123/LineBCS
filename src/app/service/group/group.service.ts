import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupModel } from '../../model/group-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public uploadFile(file: File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    console.log(file.name);
    // send the http-request and subscribe for progress-updates
    return this.http.post(environment.bcs + '/bcs/group/uploadFile', formData);

  }

  public createGroup(group: GroupModel): Observable<any> {
    return this.http.post(environment.bcs + '/bcs/group/createGroup', group);
  }

  public getGroupList() {
    return this.http.get<GroupModel[]>(environment.bcs + '/bcs/group/groupList');
  }

  public getUserListById(id) {
    return this.http.get<any>(environment.bcs + '/bcs/group/groupUserList', { params: new HttpParams().set('id', id) });
  }
}
