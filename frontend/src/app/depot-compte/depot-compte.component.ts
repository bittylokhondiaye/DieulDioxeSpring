import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Depot } from '../Depot.model';
import { PartenaireService } from '../partenaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-depot-compte',
  templateUrl: './depot-compte.component.html',
  styleUrls: ['./depot-compte.component.css']
})
export class DepotCompteComponent implements OnInit {

  errorMessage: any;
  depotForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  private compte=[];
  _partenaire= new PartenaireService( this.http,);
  //_partenaire: any;
  constructor(private http:HttpClient, _partenaire:PartenaireService) { }

  ngOnInit() {
    this.initForm();
    this._partenaire.getCompte()
    //this._partenaire.getCompte()
    .subscribe( data =>{
     this.compte = data
     console.log(data);
    });
  }

  initForm() {
    this.depotForm = this.formBuilder.group({
      Montant:['',Validators.required] ,
      Compte:['',Validators.required]
    });
  }

  onSubmitForm() {
    const formValue = this.depotForm.value;
    const newDepot = new Depot(
    formValue['Montant'],
    formValue['Compte'],
    ); 
  console.log(newDepot);
    this._partenaire.postDepot(newDepot).subscribe(res => {
      console.log(res)
    },err=>{
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'Oops.. Problème amna',
        text: err.error,
      })
  });

  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Le dépôt a bien été fait',
    showConfirmButton: false,
    timer: 1500
  })
  }

}
