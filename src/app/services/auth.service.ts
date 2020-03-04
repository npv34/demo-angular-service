import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  constructor() {
  }

  isAuthenticated() {
      return this.isLoggedIn;
  }

  checkLogin(user, data): boolean {
    for (let item of data) {
      if (user.username == item.username
        && user.password == item.password) {
        this.isLoggedIn = true;
        return true;
      }
    }
    return false;
  }
}
