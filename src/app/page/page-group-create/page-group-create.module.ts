import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageGroupCreateRoutingModule } from './page-group-create-routing.module';
import { PageGroupCreateComponent } from './component/page-group-create.component';

@NgModule({
  imports: [
    CommonModule,
    PageGroupCreateRoutingModule
  ],
  declarations: [PageGroupCreateComponent]
})
export class PageGroupCreateModule { }
