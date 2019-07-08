import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonsListingComponent } from './components/dragons/dragons-listing/dragons-listing.component';
import { DragonsDetailsComponent } from './components/dragons/dragons-details/dragons-details.component';
import { DragonsCreateComponent } from './components/dragons/dragons-create/dragons-create.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'dragon/create', //rota página criar dragão
    component: DragonsCreateComponent }, 

  { path: 'dragon/:id', //rota página detalhes do dragão
   component: DragonsDetailsComponent }, 

  { path: 'dragons', //rota página listar dragões
    component: DragonsListingComponent },

  { path: 'login', //rota página login
    component: LoginComponent },

  { path: '',  //rota página login
    component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
