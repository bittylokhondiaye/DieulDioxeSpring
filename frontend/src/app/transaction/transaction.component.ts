import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Transaction.model';
import { PartenaireService } from '../partenaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  errorMessage: any;
  transactionForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  private transaction=[];
  _partenaire= new PartenaireService( this.http,);
  afficher: boolean=true;
  constructor(private http:HttpClient,_partenaire:PartenaireService) { }

  ngOnInit() {
    this.initForm();
    //this.cacher();
  }

   
  initForm() {
    this.transactionForm = this.formBuilder.group({
      Type:['',Validators] ,
      CodeTransaction:['',Validators],
      Montant:['',Validators],
      NumeroExpediteur:['',Validators],
      NumeroDestinataire:['',Validators],
      CNIdestinataire:['',Validators],
      NomCompletExpediteur:['',Validators],
      NomCompletDestinataire:['',Validators]
    });
  }

  onSubmitForm() {
    const formValue = this.transactionForm.value;
    const newTransaction = new Transaction(
    formValue['Type'],
    formValue['CodeTransaction'],
    formValue['Montant'],
    formValue['NumeroExpediteur'],
    formValue['NumeroDestinataire'],
    formValue['CNIdestinataire'],
    formValue['NomCompletExpediteur'],
    formValue['NomCompletDestinataire'],
    ); 
    this._partenaire.postTransaction(newTransaction).subscribe(res => {
      console.log(res)
    },err=>{
      console.log(err);
      Swal.fire({
        type: 'error',
        title: 'eeh fall tiol na dé',
        text: err.statusText,
      })
  });
  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Fall transaction bi dial na dé',
    showConfirmButton: false,
    timer: 1500
  })

  }
   

  envoi(){
    document.getElementById('e1').style.display="block";
    document.getElementById('e2').style.display="block";
    document.getElementById('e3').style.display="block";
    document.getElementById('r1').style.display="none";
    document.getElementById('r2').style.display="none";
  }

  retrait(){
    document.getElementById('e1').style.display="none";
    document.getElementById('e2').style.display="none";
    document.getElementById('e3').style.display="none";
    document.getElementById('r1').style.display="block";
    document.getElementById('r2').style.display="block";
  }
  
  

}
