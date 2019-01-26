import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { DataService } from '../../../../service/data/data.service';

@Component({
  selector: 'app-page-sport-self',
  templateUrl: './page-sport-self.component.html',
  styleUrls: ['./page-sport-self.component.css']
})
export class PageSportSelfComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  lineUserDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private datePipe: DatePipe, private data: DataService, private router: Router) { }

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

  showSportCreate(uid: string, name: string) {
    this.router.navigateByUrl('/bcs/sport/selfCreate/' + uid + '/' + name);
  }
}
