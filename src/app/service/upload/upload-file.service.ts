import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  public uploadFile(file: File): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('filePart', file, file.name);
    console.log(file.name);
    // send the http-request and subscribe for progress-updates
    return this.http.post(environment.bcs + '/bcs/uploadFile/uploadImage', formData);

  }

  public getUploadFile(uid: string): Observable<any> {
    console.log(uid);
    return this.http.get(environment.bcs + '/bcs/uploadFile/imgList?uid=' + uid);
  }
}
