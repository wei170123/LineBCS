import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { PageLinkTracingCreateRoutingModule } from './page-link-tracing-create-routing.module';
import { PageLinkTracingCreateComponent } from './component/page-link-tracing-create/page-link-tracing-create.component';

@NgModule({
  imports: [
    CommonModule,
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
    PageLinkTracingCreateRoutingModule
  ],
  declarations: [PageLinkTracingCreateComponent]
})
export class PageLinkTracingCreateModule { }
