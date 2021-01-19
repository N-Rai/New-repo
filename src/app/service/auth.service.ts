import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';



export class user {
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
   private token;
   private role;
   constructor( private http: HttpClient,
                private _router: Router) { }

  login(user) {
     return this.http.post<any>(this.authUrl+ 'sign-in', user);
  }

  Register(user){
     return this.http.post<any>(this.authUrl +'sign-up', user);
  }

  loggedIn() {
     return !!this.token;
  }

  Registered(){
    return !!this.token;
  }

  getToken() {
     return this.token;
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.token = undefined;
    this.role = undefined;
    this._router.navigate(['/home']);
  }
  setAuth(token, role=undefined){
   this.token = token;
   this.role = role;
  }
  getRole(){
     return this.role
  }

}
