import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth/auth.service';

import { TokenPayload } from '../../model/auth-model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: TokenPayload = {
    account: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.formData);
    this.auth.login(this.formData).subscribe(() => {
      this.router.navigateByUrl('/bcs');
    }, (err) => {
      // console.error(err);
      window.location.href = environment.bcsFront;
    });
  }
}
