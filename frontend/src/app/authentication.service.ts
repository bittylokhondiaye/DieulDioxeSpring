import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host2:string="http://localhost:8000/api/login_check";
  jwt:string;
  username:string;
  roles:Array<string>;

  constructor( private http:HttpClient) {}

  login(data){
    /* this.parseJWT(); */
    /* const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this. ) */
    return this.http.post(this.host2,data,{observe:'response'})
  }

  saveToken(jwt:string){
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();

  }

  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.obj;
    this.roles=objJWT.roles;
     localStorage.setItem('roles',objJWT.roles);
  }

  isAdmin(){
    return this.roles[0].indexOf('ROLE_ADMIN')>=0;
  }

  isUser(){
    return this.roles[0].indexOf('ROLE_USER')>=0;
  }

  isSuperAdmin(){
    console.log(this.roles[0]);
    
    return this.roles[0].indexOf('ROLE_SUPER_ADMIN')>=0;
  }

  isCaissier(){
    return this.roles[0].indexOf('ROLE_CAISSIER')>=0;
  }

  isAuthenticated(){
    return this.roles[0] && (this.isAdmin || this.isUser || this.isSuperAdmin );
  }

  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    return localStorage.removeItem('token');
  }
}