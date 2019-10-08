import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {

  errorMessage: any;

   private user= [];

  constructor(private http:HttpClient, private _partenaire:PartenaireService) { }

  ngOnInit() {
    this._partenaire.getUser()
    .subscribe( data =>{
     this.user = data
     console.log(data);
    });
 }

 block(id){
     this._partenaire.postbloquer(id)
     /*.subscribe(
       data=>{
       this.ngOnInit();
       }
     )*/
     
 }

}
