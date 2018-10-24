import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MsgSendingModel } from '../../model/msg-sending-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MsgSendService {

  constructor(private http: HttpClient) { }

  public sendMsg(msgModel: MsgSendingModel): Observable<any> {
    return this.http.post(environment.bcs + '/bcs/msg/sendMsg', msgModel);
  }

}
