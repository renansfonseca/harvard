import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Menu2Component } from './menu2/menu2.component';
import { Cadusuario2Component } from './cadusuario2/cadusuario2.component';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'menu2', component: Menu2Component},
  { path: 'listausuarios', component: ListausuariosComponent},
  { path: 'usuario/:id', component: Cadusuario2Component},
  { path: 'usuario', component: Cadusuario2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
