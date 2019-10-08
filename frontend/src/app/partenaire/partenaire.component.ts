import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartenaireService } from '../partenaire.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  errorMessage: any;

   private partenaire= [];
  constructor( private http:HttpClient, private _partenaire:PartenaireService) { }

  ngOnInit() {
     this._partenaire.getPartenaire()
     .subscribe( data =>{
      this.partenaire = data
      console.log(data);
     });
  }

}