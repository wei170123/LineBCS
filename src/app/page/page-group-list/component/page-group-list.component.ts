import { Component, OnInit, ViewChild } from '@angular/core';
// import { saveAs } from 'file-saver';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { GroupService } from '../../../service/group/group.service';

@Component({
  selector: 'app-page-group-list',
  templateUrl: './page-group-list.component.html',
  styleUrls: ['./page-group-list.component.css']
})
export class PageGroupListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  groupDataSource = new MatTableDataSource<any>();
  totalCount;
  fileUrl;
  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getGroupList()
      .subscribe(
        data => {
          this.totalCount = data.length;
          this.groupDataSource.data = data;
          this.groupDataSource.paginator = this.paginator;
        }
      );
  }

  exportList(id: number) {
    console.log(id);
    this.groupService.getUserListById(id).subscribe(
      data => {
        // const blob = new Blob([data]); // 檔案類型 file type
        // saveAs(blob);
        window.open(data.url);
      }
    );
  }
}
