import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { DataService } from '../../../../../service/data/data.service';

@Component({
  selector: 'app-page-sport-diary-detail',
  templateUrl: './page-sport-diary-detail.component.html',
  styleUrls: ['./page-sport-diary-detail.component.css']
})
export class PageSportDiaryDetailComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  name: string;

  sportDiaryDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private datePipe: DatePipe, private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let uid = params['uid'];
      // console.log(uid);
      let name = params['name'];
      this.name = name;

      this.dataService.sportDiaryListByUID(uid)
        .subscribe(
          data => {
            console.log(data);
            this.totalCount = data.length;
            this.sportDiaryDataSource.data = data;
            this.sportDiaryDataSource.paginator = this.paginator;
          }
        );
    });
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }
}
