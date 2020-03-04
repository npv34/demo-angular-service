import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IUser} from '../IUser';
import {UserService} from '../../services/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {
  widthImage = 100;
  usersFilter: IUser[] = [];
  users: IUser[] = [];
  name: string;
  countUserFilter: number;
  message: string;

  constructor(private userService: UserService,
              private route: Router) {
  }

  ngOnInit() {
    this.usersFilter = this.userService.getAll();
    this.users = this.usersFilter;
  }

  findByName(value) {
      return this.users.filter((user: IUser) => {
        return user.name.indexOf(value) !== -1;
      })
  }

  search(value) {
    this.name = value;
    this.usersFilter = (this.findByName(this.name)) ? this.findByName(this.name): this.users;
    this.countUserFilter = this.usersFilter.length;
  }

  ngOnChanges(): void {
    console.log(this.name);
  }

  delete(index: number) {
    if (confirm("are you sure delete?")) {
        this.userService.delete(index);
        this.route.navigate(['/users']);
        this.message = 'Delete success';
    }
  }
}
