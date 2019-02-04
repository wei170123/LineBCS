import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { DataService } from '../../../../service/data/data.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-page-sport-self-detail',
  templateUrl: './page-sport-self-detail.component.html',
  styleUrls: ['./page-sport-self-detail.component.css']
})
export class PageSportSelfDetailComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  name;

  lineUserDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private datePipe: DatePipe, private activatedRoute: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let uid = params['uid'];
      // console.log(uid);
      let name = params['name'];

      this.name = name;

      this.data.selfSportListByUID(uid)
        .subscribe(
          data => {
            console.log(data);
            this.totalCount = data.length;
            this.lineUserDataSource.data = data;
            this.lineUserDataSource.paginator = this.paginator;
          }
        );
    });
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

  delete(sportId: string, uid: string) {
    var r = confirm("確定刪除?");
    if (r == true) {
      this.data.deleteSelfSportListByUID(sportId)
        .subscribe(
          data => {
            console.log(data);
            if (data && data.result == "Success") {
              alert("刪除成功");
              window.location.href = environment.bcsFront + '/bcs/sportSelfList/detail/' + uid + "/" + this.name;
            } else {
              alert("刪除失敗");
            }
          }
        );
    }

  }


}
