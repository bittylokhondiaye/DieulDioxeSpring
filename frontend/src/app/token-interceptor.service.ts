import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor , HttpHeaders, HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector:Injector , authService:AuthenticationService) { }

  /* intercept(req, next){
    let authservice = this.injector.get(AuthenticationService)
    let tokenizedReq = req.clone({
      setHeaders: {
          'Authorisation' : `Bearer ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  } */

  intercept(req, next){
    let authservice = this.injector.get(AuthenticationService)
    const headers= new HttpHeaders;
    headers.append('content-type', 'application/json') ;
    let token= authservice.getToken();
    headers.append('Authorization', 'Bearer ' + token);
    let tokenizedReq = req.clone({
      setHeaders: {
          'Authorisation' : `Bearer ${token}`
      }
    })
    return next.handle(tokenizedReq);
  }

}