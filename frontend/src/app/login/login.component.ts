import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(data){
    console.log(data);
    this.authService.login(data)
      .subscribe(resp=>{
        console.log(resp);
        //console.log(resp.headers.get('Authorization'));
        /* let jwt=resp.headers.get('Authorization');
        this.authService.saveToken(jwt); */
        let jwt=resp.body['token'];
        this.authService.saveToken(jwt);
        console.log(resp);
        if(this.isSuperAdmin()){this.router.navigate(['/listerPartenaire']);}
        if(this.isCaissier()){this.router.navigate(['/depot']);}
        if(this.isAdmin()){this.router.navigate(['/listerPartenaire']);}
        if(this.isUser()){this.router.navigate(['/transaction']);}
        // this.router.navigate(['/listerPartenaire']);
      },err=>{
          console.log(err);
          Swal.fire({
            position: 'top-end',
            type: 'error',
            title: 'Email ou Mot de passe Incorrect',
            showConfirmButton: false,
            timer: 1500
          })
          
      })
  }
  

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isSuperAdmin(){
    return this.authService.isSuperAdmin();
  }

  isCaissier(){
    return this.authService.isCaissier();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
}