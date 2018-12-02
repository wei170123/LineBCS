import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TraceLinkService } from '../../../../service/traceLink/trace-link.service';

@Component({
  selector: 'app-page-link-tracing-list',
  templateUrl: './page-link-tracing-list.component.html',
  styleUrls: ['./page-link-tracing-list.component.css']
})
export class PageLinkTracingListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private traceLinkService: TraceLinkService) { }

  ngOnInit() {
    this.traceLinkService.getTraceLinkist().subscribe(
      data => {
        this.totalCount = data.length;
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
