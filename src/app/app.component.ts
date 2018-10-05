import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

// import { MenuSidenavComponent } from './page/menu-sidenav/menu-sidenav.component';

import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sideNav')
  private sidenav: MatSidenav;

  title = 'LineBCS';
  isLoggedin: Boolean = false;

  constructor(private router: Router, private auth: AuthService) {
    //Detect Route Change & Check Loggedin
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        // console.log(this.router.url);


        if (this.auth.isLoggedIn()) {
          this.isLoggedin = true;
          this.router.navigateByUrl('/bcs');
          this.sidenav.open();
        }
        else {
          this.isLoggedin = false;
        }

      }
    });
  }

  navToggle() {

  }
}
