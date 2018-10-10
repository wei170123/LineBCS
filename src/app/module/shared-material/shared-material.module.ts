import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})

export class SharedMaterialModule { }
