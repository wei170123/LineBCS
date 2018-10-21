import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DatePipe } from '@angular/common';

import { GroupModel } from '../../../model/group-model';
import { MsgSendingModel } from '../../../model/msg-sending-model';

import { GroupService } from '../../../service/group/group.service';

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

  constructor(private datePipe: DatePipe, private groupService: GroupService) { }

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
    console.log(index);
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

  sendToMe() {
    // console.log(this.transformDate(this.sendingDate));
    // console.log(this.sendingHour);
    // console.log(this.sendingMinute);
    // console.log(this.sendingGroup);
    // if (this.sendingType == "" || this.sendingGroup == 0) {
    //   alert("請確認欄位內容!");
    //   return;
    // }
    // if (!this.sendingDate && (this.sendingType == "Scheduled")) {
    //   alert("請確認欄位內容!");
    //   return;
    // }
    // if (!this.sendingDate && (this.sendingType == "Scheduled")) {
    //   alert("請確認欄位內容!");
    //   return;
    // }
    let formData = {} as MsgSendingModel;


    this.msgs.toArray().forEach((item) => {
      // console.log(item.nativeElement.value);
      // console.log(item.nativeElement.getAttribute('type'));
      let tmpMsg = {
        type: item.nativeElement.getAttribute('type'),
        content: item.nativeElement.value
      }
      formData.msg.push(tmpMsg);
    })
    console.log(formData);
    // this.formData.date = this.transformDate(this.sendingDate) + "-" + this.sendingHour + "-" + this.sendingMinute;
    // this.formData.groupMainId = this.sendingGroup;
    // this.formData.sendType = this.sendingType;
    // console.log(this.formData);
  }

}
