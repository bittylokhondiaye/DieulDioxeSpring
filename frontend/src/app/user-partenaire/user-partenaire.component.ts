import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PartenaireService } from '../partenaire.service';
import { UserPartenaire } from '../userPartenaire.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-partenaire',
  templateUrl: './user-partenaire.component.html',
  styleUrls: ['./user-partenaire.component.css']
})
export class UserPartenaireComponent implements OnInit {

  constructor(private http:HttpClient, private _partenaire:PartenaireService) { }

  errorMessage: any;
  userPartenaireForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  private partenaire= [];
  private compte= [];
  fileToUpload:File=null;
  imageurl:string="assets/img/testuser.png"

  ngOnInit() {
    this.initForm();
    this._partenaire.getCompte()
    //this._partenaire.getCompte()
    .subscribe( data =>{
     this.compte = data
     console.log(data);
    });
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
    this.userPartenaireForm = this.formBuilder.group({
      Prenom:['',Validators.required] ,
      Nom:['',Validators.required],
      password:['',Validators.required],
      Telephone:['',Validators.required],
      CNI:['',Validators.required],
      Login:['',Validators.required],
      Email:['',Validators.required],
      Compte:['',Validators.required],
      imageName:['',Validators.required]
    });
  }
  
    onSubmitForm() {
      const formValue = this.userPartenaireForm.value;
      const formData:FormData = new FormData();
      
  formData.append('Prenom',formValue['Prenom'])
  formData.append('Nom',formValue['Nom'])
  formData.append('password',formValue['password'])
  formData.append('Telephone',formValue['Telephone'])
  formData.append('CNI',formValue['CNI'])
  formData.append('Login',formValue['Login'])
  formData.append('Email',formValue['Email'])
  formData.append('Compte',formValue['Compte'])
  formData.append('imageName',this.fileToUpload,this.fileToUpload.name)
      this._partenaire.postUserPartenaire(formData).subscribe(res => {
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
      title: 'L\'utilisateur  a bien été ajouté',
      showConfirmButton: false,
      timer: 1500
    })
    }

}
