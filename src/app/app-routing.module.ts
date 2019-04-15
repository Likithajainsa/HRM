import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JoiningformComponent } from './joiningform/joiningform.component';
import { NewsideComponent } from './newside/newside.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './admin/pages/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent},
  { path: 'form', component:JoiningformComponent},
  {path:'final',component:NewsideComponent},
  {path: 'tables',component:TableComponent},
  {path: 'users',component:UserComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
