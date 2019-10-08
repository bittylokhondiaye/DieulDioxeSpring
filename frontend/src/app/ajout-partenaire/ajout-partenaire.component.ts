import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../user.service';
import { PartenaireService } from '../partenaire.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ajout-partenaire',
  templateUrl: './ajout-partenaire.component.html',
  styleUrls: ['./ajout-partenaire.component.css']
})
export class AjoutPartenaireComponent implements OnInit {

  userForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  imageurl:string="assets/img/testuser.png"
  fileToUpload:File=null;

  constructor(private partenaireService:PartenaireService) { }

  ngOnInit() {
    this.initForm();
  }

  handleFileInput(file:FileList ){
    this.fileToUpload=file.item(0);
    var reader=new FileReader();
    reader.onload=(event:any)=>
    {
      this.imageurl=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      Prenom: ['',Validators.required],
      Nom: ['',Validators.required],
      password: ['',Validators.required],
      Telephone: ['',Validators.required],
      CNI: ['',Validators.required],
      NINEA: ['',Validators.required],
      Adresse: ['',Validators.required],
      RaisonSocial: ['',Validators.required],
      Email:['',Validators.required] ,
      //NumeroCompte: ['',Validators.required],
      imageName:['',Validators.required]
    });
}


onSubmitForm() {
  const formValue = this.userForm.value;
  const formData: FormData=new FormData();
  formData.append('imageName',this.fileToUpload,this.fileToUpload.name)
  formData.append('Email',formValue['Email'])
  formData.append('password',formValue['password'])
  formData.append('Prenom',formValue['Prenom'])
  formData.append('Nom',formValue['Nom'])
  formData.append('Telephone',formValue['Telephone'])
  formData.append('CNI',formValue['CNI'])
  formData.append('NINEA',formValue['NINEA'])
  formData.append('Adresse',formValue['Adresse'])
  formData.append('RaisonSocial',formValue['RaisonSocial'])
  
  this.partenaireService.postUser(formData).subscribe(res => {
    console.log(res)
  },err=>{
    console.log(err);
    Swal.fire({
      type: 'error',
      title: 'Oops.. Problème amna',
      text: err.statusText,
    })
});
  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Le partenaire a bien été ajouté',
    showConfirmButton: false,
    timer: 1500
  })
  /* this.router.navigate(['/ajoutUser']); */
}

}
