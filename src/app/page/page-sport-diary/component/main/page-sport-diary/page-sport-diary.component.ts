import { Component, OnInit, ViewChild } from '@angular/core';

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

}
