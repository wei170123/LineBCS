import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { GroupModel } from '../../../model/group-model';

import { GroupService } from '../../../service/group/group.service';

@Component({
  selector: 'app-page-msg-sending',
  templateUrl: './page-msg-sending.component.html',
  styleUrls: ['./page-msg-sending.component.css']
})
export class PageMsgSendingComponent implements OnInit {
  hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minutes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 59];
  methods = [
    { "value": 'Immediate', "chinese": '立即發送' },
    { "value": 'Scheduled', "chinese": '預約發送' }
  ];

  groupList: GroupModel[];

  sendingMethod: string = "";
  sendingDate: Date;
  sendingHour: number;
  sendingMinute: number;
  sendingGroup: number;


  // formData: GroupModel = {
  //   groupName: '',
  //   groupDescription: '',
  //   groupMainId: 0
  // };

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

  sendToMe() {
    // console.log(this.transformDate(this.sendingDate));
    // console.log(this.sendingHour);
    // console.log(this.sendingMinute);
    console.log(this.sendingGroup);
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
