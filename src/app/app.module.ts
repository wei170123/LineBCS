import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './module/shared-material/shared-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { MenuSidenavComponent } from './page/menu-sidenav/menu-sidenav.component';
import { MenuToolbarComponent } from './page/menu-toolbar/menu-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSidenavComponent,
    MenuToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
