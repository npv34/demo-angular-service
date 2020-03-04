import {Injectable} from '@angular/core';
import {IUser} from '../users/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: 'thanh',
      username: 'thanh',
      password: '123456',
      email: 'thanh@gmail.com',
      image: 'assets/image/user.png'
    },
    {
      id: 2,
      name: 'nam',
      username: 'nam',
      password: '123456',
      email: 'nam@gmail.com',
      image: 'assets/image/user.png'
    },
    {
      id: 3,
      name: 'hoang',
      username: 'hoang',
      password: '123456',
      email: 'hoang@gmail.com',
      image: 'assets/image/user.png'
    }
  ];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  add(user: IUser) {
    this.users.push(user);
  }

  findByIndex(index): IUser {
    return this.users[index];
  }

  update(index, data): void {
    this.users[index] = data;
  }

  delete(index: number): void {
    this.users.splice(index, 1);
  }
}
