import { Injectable , Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor( private injector: Injector) { }

  intercept(req, next){
    console.log(req)
    console.log(req.url)
    if(!String(req.url).includes("users")){
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ authService.getToken()
      }
    })
    console.log(tokenizedReq)
      req = tokenizedReq;
    }
    return next.handle(req)
  }
}
