import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../../service/auth/auth.service';


@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {
  username: string;
  @Input() isLoggedin: Boolean = false;

  constructor(private router: Router, private auth: AuthService) {
    //Detect Route Change & Check Loggedin
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.router.url == '/' || this.router.url == '' || this.router.url == '/login' || !this.auth.isLoggedIn) {
          // this.isLoggedin = false;
        } else {
          this.username = this.auth.getUserDetails().username;
        }
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
