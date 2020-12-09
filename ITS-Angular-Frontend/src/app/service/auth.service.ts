import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


class user {
 private email : string;
 private name : string;
 private surname: string;
 private password: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private authUrl="http://localhost:8083/users/";

   constructor( private http: HttpClient,
                private _router: Router) { }

  login(user) {
     return this.http.post<any>(this.authUrl+ 'sign-in', user);
  }

  Register(user){
     return this.http.post<any>(this.authUrl +'sign-up', user);
  }

  loggedIn() {
     return !!localStorage.getItem('token');
  }

  Registered(){
    return !!localStorage.getItem('token');
  }

  getToken() {
     return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }
}
