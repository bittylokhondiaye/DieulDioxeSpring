import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.authService.loadToken();
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isSuperAdmin(){
    console.log(this.authService.isSuperAdmin());
    
    return this.authService.isSuperAdmin();
  }

  isCaissier(){
    return this.authService.isCaissier();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  logout(){
    return this.authService.logout();
  }
}
