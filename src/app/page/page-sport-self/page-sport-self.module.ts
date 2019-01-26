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

import { PageSportSelfRoutingModule } from './page-sport-self-routing.module';
import { PageSportSelfComponent } from './component/page-sport-self/page-sport-self.component';
import { PageSportSelfCreateComponent } from './component/page-sport-self-create/page-sport-self-create.component';

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
    PageSportSelfRoutingModule
  ],
  providers: [DatePipe],
  declarations: [PageSportSelfComponent, PageSportSelfCreateComponent]
})
export class PageSportSelfModule { }
