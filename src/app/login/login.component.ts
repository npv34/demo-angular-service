import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {IUser} from '../users/IUser';
import {UserService} from '../services/user-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [],
      password: []
    })
  }

  login(data) {
      let user = {
        username: data.username,
        password: data.password,
      };
      let dataCurrent = this.userService.getAll();

      if (this.authService.checkLogin(user, dataCurrent)) {
         this.router.navigateByUrl('admin/users')
      } else {
        alert("sai tai khoan")
      }
  }

}
