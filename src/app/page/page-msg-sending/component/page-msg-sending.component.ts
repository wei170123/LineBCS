import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { GroupModel } from '../../../model/group-model';
import { MsgSendingModel } from '../../../model/msg-sending-model';

import { GroupService } from '../../../service/group/group.service';
import { MsgSendService } from '../../../service/msgSend/msg-send.service';

@Component({
  selector: 'app-page-msg-sending',
  templateUrl: './page-msg-sending.component.html',
  styleUrls: ['./page-msg-sending.component.css']
})
export class PageMsgSendingComponent implements OnInit {
  @ViewChildren("msg") msgs: QueryList<any>;

  hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minutes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 59
  ];
  methods = [
    { "value": 'Immediate', "chinese": '立即發送' },
    { "value": 'Scheduled', "chinese": '預約發送' }
  ];

  groupList: GroupModel[];

  sendingType: string = "";
  sendingDate: Date;
  sendingHour: number;
  sendingMinute: number;
  sendingGroup: number = 0;

  constructor(private datePipe: DatePipe, private groupService: GroupService, private msgSendService: MsgSendService, private router: Router) { }

  ngOnInit() {
    this.groupService.getGroupList()
      .subscribe(
        data => {
          this.groupList = data;
          // console.log(this.groupList);
        }
      );
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  counter = 0;
  textTempBoolean: boolean[] = [false];
  closeTextTempate(index: number) {
    // console.log(index);
    this.textTempBoolean[index] = false;
    this.counter--;
  }

  addTextTempate() {
    if (this.counter < 5) {
      this.textTempBoolean[this.counter] = true;
      this.counter++;
    } else {
      alert("每次最多五則訊息!");
    }
  }

  sendMsg(receiver: string) {

    if (receiver != 'SendToMe') {
      if (this.sendingType == "" || this.sendingGroup == 0) {
        alert("請確認欄位內容!");
        return;
      }
      if (!this.sendingDate && (this.sendingType == "Scheduled")) {
        alert("請確認欄位內容!");
        return;
      }
      if (!this.sendingHour && (this.sendingType == "Scheduled")) {
        alert("請確認欄位內容!");
        return;
      }
      if (!this.sendingMinute && (this.sendingType == "Scheduled")) {
        alert("請確認欄位內容!");
        return;
      }
    }


    let formData = {} as MsgSendingModel;
    let msgArr = [];
    let msgContentNull = false;

    this.msgs.toArray().forEach((item) => {
      // console.log(item.nativeElement.value);
      // console.log(item.nativeElement.getAttribute('type'));

      let tmpMsg = {
        type: item.nativeElement.getAttribute('type'),
        content: item.nativeElement.value
      }
      msgArr.push(tmpMsg);

      if (!item.nativeElement.value) {
        msgContentNull = true;
        return;
      }
    })
    // console.log(msgArr.length);
    if (msgArr.length == 0) {
      alert("請選擇訊息類型!");
      return;
    }

    if (msgContentNull) {
      alert("請確認訊息內容!");
      return;
    }

    formData.date = this.transformDate(this.sendingDate) + "-" + this.sendingHour + "-" + this.sendingMinute;
    formData.receiver = receiver;
    formData.groupMainId = this.sendingGroup;
    formData.sendType = this.sendingType;
    formData.msg = msgArr;
    console.log(formData);

    this.msgSendService.sendMsg(formData)
      .subscribe(
        (data) => {
          // console.log(data);
          alert('發送完畢!');
          this.router.navigateByUrl('/bcs/msgList');
        },
        (err) => {
          // console.info(err);
          alert('發送失敗，請洽服務人員!');
        }
      );
  }

}
