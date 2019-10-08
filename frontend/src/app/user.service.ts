import { Injectable,Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = "http://localhost:8000/api/register";
  injector: any;
  req:any;
  next:any;
  constructor( private http:HttpClient,interceptor:TokenInterceptorService, injector:Injector,authservice:AuthenticationService) {}

  postUser(myDatas) {
    let  headers = new HttpHeaders().set('Authorization', "Bearer " + localStorage.getItem('token'));
    /* let authservice = this.injector.get(AuthenticationService) */
    /* let authservice =new AuthenticationService(this.http);
    const headers= new HttpHeaders;
    headers.append('content-type', 'application/json') ;
    let token= authservice.getToken();
    headers.append('Authorization', 'Bearer ' + token);
    let tokenizedReq = this.req.clone({
      setHeaders: {
          'Authorisation' : `Bearer ${token}`
      }
    })
    return this.next.handle(tokenizedReq); */
    /* let interceptor = this.injector.get(TokenInterceptorService);
    interceptor.intercept(); */

    return this.http.post(this.url,myDatas,{headers});
    /* this.http.post(this.url, myDatas).subscribe(res => {
        console.log(res)
    }); */
}


}
