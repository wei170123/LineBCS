import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatCheckboxModule,
  MatSortModule,
  MatPaginatorModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule
} from '@angular/material';

import { PageSportSelfListRoutingModule } from './page-sport-self-list-routing.module';
import { PageSportSelfListComponent } from './component/page-sport-self-list/page-sport-self-list.component';
import { PageSportSelfDetailComponent } from './component/page-sport-self-detail/page-sport-self-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    PageSportSelfListRoutingModule
  ],
  providers: [DatePipe],
  declarations: [PageSportSelfListComponent, PageSportSelfDetailComponent]
})
export class PageSportSelfListModule { }
