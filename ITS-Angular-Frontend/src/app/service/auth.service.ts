import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   authUrl="http://localhost:8083/users/";

   constructor( private http: HttpClient) { }

  login(model: any) {
     return this.http.post(this.authUrl+ 'sign-in', model);

  }

  Register(model: any){
     return this.http.post<any>(this.authUrl +'sign-up', model);
  }

}
