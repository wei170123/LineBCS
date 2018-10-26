import { Component, OnInit } from '@angular/core';

import { MsgSendService } from '../../../service/msgSend/msg-send.service';

@Component({
  selector: 'app-page-msg-list',
  templateUrl: './page-msg-list.component.html',
  styleUrls: ['./page-msg-list.component.css']
})
export class PageMsgListComponent implements OnInit {
  msgList;

  constructor(private msgSendService: MsgSendService) { }

  ngOnInit() {
    this.msgSendService.getMsgSendedList()
      .subscribe(
        data => {
          console.log(data);
          for (var d of data) {
            d.content = JSON.parse(d.content);
          }
          this.msgList = data;
        }
      );
  }


  public getMsgType(type: string) {
    if (type == 'text') {
      return "文字訊息"
    }
  }
}
