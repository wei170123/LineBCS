import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { GroupModel } from '../../../model/group-model';
import { MsgSendingModel } from '../../../model/msg-sending-model';

import { GroupService } from '../../../service/group/group.service';
import { UploadFileService } from '../../../service/upload/upload-file.service';
import { MsgSendService } from '../../../service/msgSend/msg-send.service';

import { environment } from '../../../../environments/environment';

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

  constructor(private datePipe: DatePipe, private groupService: GroupService, private uploadFileService: UploadFileService, private msgSendService: MsgSendService, private router: Router) { }

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

  imgList: string[] = ['', '', '', '', ''];
  uploadFile(event, index) {
    const file = event.target.files[0];
    this.uploadFileService.uploadFile(file).subscribe(data => {
      console.log(data);
      if (data && data.result == "Success") {
        // var arr = data.data.referenceId.split("\\");
        // var imgName = arr[arr.length - 1];
        // var id = imgName.split("\.")[0];
        // console.log(id);
        var imgUrl = environment.bcs + "/images/uploads/" + data.data.referenceId;
        this.imgList[index] = imgUrl;
        alert("上傳成功");
      } else {
        alert("上傳失敗");
      }
    });
  }



  counter = 0;
  msgTempBoolean: string[] = [];
  closeMsgTempate(index: number) {
    // console.log(index);
    // this.msgTempBoolean[index] = '';
    this.msgTempBoolean[this.counter - 1] = '';
    this.counter--;
  }

  addMsgTempate(type: string) {
    if (this.counter < 5) {
      this.msgTempBoolean[this.counter] = type;
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
      console.log(item.nativeElement.value);
      console.log(item.nativeElement.getAttribute('name'));

      let tmpMsg = {
        type: item.nativeElement.getAttribute('name'),
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
