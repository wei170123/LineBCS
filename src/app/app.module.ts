import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HttpHeaderInterceptor } from './Util/http-header-interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './module/shared-material/shared-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { MenuSidenavComponent } from './page/menu-sidenav/menu-sidenav.component';
import { MenuToolbarComponent } from './page/menu-toolbar/menu-toolbar.component';
import { HomeComponent } from './page/home/home.component';
import { TestComponent } from './page/test/test.component';

import { SelfSPortDialogComponent } from './dialog/self-sport-dialog/self-sport-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSidenavComponent,
    MenuToolbarComponent,
    HomeComponent,
    TestComponent,
    SelfSPortDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SelfSPortDialogComponent]
})
export class AppModule { }
