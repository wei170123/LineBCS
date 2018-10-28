import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

import { PageArticleRoutingModule } from './page-article-routing.module';
import { PageArticleListComponent } from './component/page-article-list/page-article-list.component';
import { PageArticleCreateComponent } from './component/page-article-create/page-article-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    PageArticleRoutingModule
  ],
  providers: [DatePipe],
  declarations: [PageArticleListComponent, PageArticleCreateComponent]
})
export class PageArticleModule { }
