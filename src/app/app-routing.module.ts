import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'admin',
    component: DashboardComponent,
    children: [
      { path: 'users', component: UserListComponent,},
      { path: 'users/create', component: UserAddComponent},
      { path: 'users/:id/edit', component: UserEditComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
