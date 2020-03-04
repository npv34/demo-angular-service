import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MenuComponent } from './main/menu/menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputSearchComponent } from './main/input-search/input-search.component';
import { CountRecordComponent } from './main/count-record/count-record.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    InputSearchComponent,
    CountRecordComponent,
    UserAddComponent,
    UserEditComponent,
    BookListComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
