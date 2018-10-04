import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})

export class SharedMaterialModule { }
