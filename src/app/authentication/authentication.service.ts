import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from './authentication';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public userSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private _http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(null);
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  logIn(email: string, password: string) {
    this.showSpinner.next(true);
    const url: string = `${environment.apiUrl}`;
    const body: any = { email: email, password: password };
    return this.http.post<any>(url, body)
      .pipe(map(res => {
        //console.log(res);
        const user: User = {
           uid: res.userId,
           email: res.email,
           displayName: res.displayName,
           access_token: res.token
        };
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(res.access_token));
        console.log(user);
        return user;
      }));
  }

  refreshToken() {
    const url: string = `${environment.apiUrl}`;
    const body: any = {
      token : this.userValue.access_token
    };
    return this.http.post<any>(url, body)
      .pipe(map((token) => {
        const user: User = {
          uid: this.userValue.uid,
          displayName: this.userValue.displayName,
          email: this.userValue.email,
          access_token: token.access_token
        }
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

  logout() {
      localStorage.removeItem('user');
      this.userSubject.next(null);
  }
}
