import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { GroupModel } from '../../model/group-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  public uploadFile(file: File): Observable<any> {
    var status = {};

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    console.log(file.name);
    // send the http-request and subscribe for progress-updates
    return this.http.post(environment.bcs + '/bcs/group/uploadFile', formData);

  }

  public createGroup(group: GroupModel): Observable<any> {
    return this.http.post(environment.bcs + '/bcs/group/createGroup', group);
  }

}
