import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserDetails, TokenResponse, TokenPayload } from '../../model/auth-model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  private request(method: 'post', type: 'login', user: TokenPayload): Observable<any> {
    let base = this.http.post(environment.bcs + '/bcs/login', user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        // console.log(data);
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  private saveToken(token: string): void {
    localStorage.setItem('X-BCS-TOKEN', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('X-BCS-TOKEN');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('X-BCS-TOKEN');
    // this.router.navigateByUrl('/login');
    window.location.href = environment.bcsFront;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
