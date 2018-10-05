import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
        }
        else {
          this.isLoggedin = false;
        }

      }
    });
  }
}
