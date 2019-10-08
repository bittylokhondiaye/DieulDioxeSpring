import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../User.model';
import { TokenInterceptorService } from '../token-interceptor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent implements OnInit {

  userForm: FormGroup;
  router: any;
  formBuilder= new FormBuilder;
  imageurl:string="assets/img/testuser.png"
  fileToUpload:File=null;

  constructor( private userService:UserService ) { }

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
        email:['',Validators.required] ,
        password: ['',Validators.required],
        Profile: ['',Validators.required],
        Statut: ['',Validators.required],
        imageName:['',Validators.required]
      });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const formData: FormData=new FormData();
    formData.append('imageName',this.fileToUpload,this.fileToUpload.name)
    formData.append('email',formValue['email'])
    formData.append('password',formValue['password'])
    formData.append('Profile',formValue['Profile'])
    formData.append('Statut',formValue['Statut'])
    
    /* const newUser = new User(
      formValue['email'],
      formValue['password'],
      formValue['Profile'],
      formValue['Statut'],
      formValue['imageName']=this.fileToUpload.name
      //formValue['imageName']
    ); */
    this.userService.postUser(formData).subscribe(res => {
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
  

