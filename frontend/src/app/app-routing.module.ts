import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AjoutPartenaireComponent } from './ajout-partenaire/ajout-partenaire.component';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';
import { AjoutCompteComponent } from './ajout-compte/ajout-compte.component';
import { DepotCompteComponent } from './depot-compte/depot-compte.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { UserPartenaireComponent } from './user-partenaire/user-partenaire.component';

const routes: Routes = [
  { path:"login" , component:LoginComponent},
  { path:"listerPartenaire" , component:PartenaireComponent},
  { path:"ajoutPartenaire" , component:AjoutPartenaireComponent},
  { path:"ajoutUser" , component:AjoutUserComponent},
  { path:"ajoutCompte" , component:AjoutCompteComponent},
  { path:"depot" , component:DepotCompteComponent},
  { path:"transaction" , component:TransactionComponent},
  { path:"listerUser" , component:ListerUserComponent},
  { path:"ajoutUserPartenaire" , component:UserPartenaireComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }