import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { ArticleService } from '../../../../service/article/article.service';

@Component({
  selector: 'app-page-article-list',
  templateUrl: './page-article-list.component.html',
  styleUrls: ['./page-article-list.component.css']
})
export class PageArticleListComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;

  articleDataSource = new MatTableDataSource<any>();
  totalCount;

  constructor(private datePipe: DatePipe, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticleList()
      .subscribe(
        data => {
          this.totalCount = data.length;
          this.articleDataSource.data = data;
          this.articleDataSource.paginator = this.paginator;
        }
      );
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }
}
