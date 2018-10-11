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

    // create a http-post request and pass the form
    // tell it to report the upload progress
    const req = new HttpRequest('POST', environment.bcs + '/bcs/group/uploadFile', formData);

    // send the http-request and subscribe for progress-updates
    return this.http.request(req);

  }

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
