import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { MatTableDataSource, MatPaginator } from '@angular/material';

import { DataService } from '../../../../../service/data/data.service';

@Component({
  selector: 'app-page-sport-diary',
  templateUrl: './page-sport-diary.component.html',
  styleUrls: ['./page-sport-diary.component.css']
})
export class PageSportDiaryComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  lineUserDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private datePipe: DatePipe, private router: Router, private data: DataService) { }

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

  showSportDiaryDetail(uid: string, name: string) {
    this.router.navigateByUrl('/bcs/sportDiary/detail/' + uid + '/' + name);
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }
}
