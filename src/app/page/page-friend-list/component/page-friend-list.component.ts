import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { LineUserModel } from '../../../model/friendList-model';
import { DataService } from '../../../service/data/data.service';

@Component({
  selector: 'app-page-friend-list',
  templateUrl: './page-friend-list.component.html',
  styleUrls: ['./page-friend-list.component.css']
})
export class PageFriendListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  lineUserDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private data: DataService) { }

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

  getChineseStatus(status) {
    if (status == 'BINDED') {
      return '已綁定';
    } else if (status == 'UNBIND') {
      return '未綁定';
    } else if (status == 'BLOCK') {
      return '封鎖';
    }
  }
}
