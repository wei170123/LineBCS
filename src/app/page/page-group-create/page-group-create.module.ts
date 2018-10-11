import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

import { PageGroupCreateRoutingModule } from './page-group-create-routing.module';
import { PageGroupCreateComponent } from './component/page-group-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    PageGroupCreateRoutingModule
  ],
  declarations: [PageGroupCreateComponent]
})
export class PageGroupCreateModule { }
