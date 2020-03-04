import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {IUser} from '../IUser';
import {UserService} from '../../services/user-service.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  createUserForm;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: Router) {
  }

  ngOnInit() {
    this.createUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  onsubmit(data) {
     let user: IUser = {
       email: data.email,
       name: data.name,
       address: data.address
     };
     this.userService.add(user);
     this.route.navigate(['/users'])
  }

  get name() {
    return this.createUserForm.get('name');
  }

  get email() {
    return this.createUserForm.get('email');
  }

  get address() {
    return this.createUserForm.get('address');
  }

}
