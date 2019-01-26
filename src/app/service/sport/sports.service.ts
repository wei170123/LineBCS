import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  public createSelfSport(sportModel: any): Observable<any> {
    return this.http.post(environment.bcs + '/bcs/sports/save', sportModel);
  }
}
