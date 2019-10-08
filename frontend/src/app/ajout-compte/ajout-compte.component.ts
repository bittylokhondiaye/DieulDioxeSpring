import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartenaireService } from '../partenaire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Compte } from '../Compte.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-compte',
  templateUrl: './ajout-compte.component.html',
  styleUrls: ['./ajout-compte.component.css']
})
export class AjoutCompteComponent implements OnInit {
  errorMessage: any;
  compteForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  private partenaire= [];
 constructor( private http:HttpClient, private _partenaire:PartenaireService) { }

 ngOnInit() {
  this.initForm();
    this._partenaire.getPartenaire()
    .subscribe( data =>{
     this.partenaire = data
     console.log(data);
    },err=>{
      console.log(err);
  }
    );
    
 }

 initForm() {
  this.compteForm = this.formBuilder.group({
    MontantDeposer:['',Validators.required] ,
    Partenaire:['',Validators.required]
  });
}

  onSubmitForm() {
    const formValue = this.compteForm.value;
    const newCompte = new Compte(
    formValue['MontantDeposer'],
    formValue['Partenaire'],
    );
    this._partenaire.postCompte(newCompte).subscribe(res => {
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
      title: 'Le Compte a bien été ajouté',
      showConfirmButton: false,
      timer: 1500
    })
  }


  
}
  


