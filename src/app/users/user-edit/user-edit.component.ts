import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  UserUpdateForm;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    let user = this.userService.findByIndex(this.id);
    console.log(user.address);
    this.UserUpdateForm = this.fb.group({
      name: [user.name],
      email: [user.email],
      address: [user.address]
    })
  }

  onsubmit(data) {
    this.userService.update(this.id, data);
    this.router.navigate(['/users'])
  }

  get name() {
    return this.UserUpdateForm.get('name');
  }

  get email() {
    return this.UserUpdateForm.get('email');
  }

  get address() {
    return this.UserUpdateForm.get('address');
  }
}
