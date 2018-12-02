import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraceLinkService {

  constructor(private http: HttpClient) { }

  public getTraceLinkist() {
    return this.http.get<any[]>(environment.bcs + '/bcs/traceLink/traceLinkList');
  }

  public createTraceLinkist(targetLink): Observable<any> {
    return this.http.post(environment.bcs + '/bcs/traceLink/traceLinkCreate', targetLink);
  }
}
