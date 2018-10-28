import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { DataService } from '../../../service/data/data.service';

import { MsgSendingModel } from '../../../model/msg-sending-model';

@Component({
  selector: 'app-page-friend-list',
  templateUrl: './page-friend-list.component.html',
  styleUrls: ['./page-friend-list.component.css']
})
export class PageFriendListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  lineUserDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private datePipe: DatePipe, private data: DataService) { }

  ngOnInit() {
    this.data.getFriendList()
      .subscribe(
        data => {
          this.totalCount = data.length;
          this.lineUserDataSource.data = data;
          this.lineUserDataSource.paginator = this.paginator;
        }
      );
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }

  getChineseStatus(status) {
    if (status == 'BINDED') {
      return '已綁定';
    } else if (status == 'UNBIND') {
      return '未綁定';
    } else if (status == 'BLOCK') {
      return '封鎖';
    }
  }

  sendMsg() {
    let formData = {} as MsgSendingModel;
  }

}
