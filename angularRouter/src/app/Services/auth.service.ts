import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: Boolean = false;
  userService: UserService = inject(UserService);
  login(username: string, password: string) {
    let user = this.userService.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user === undefined) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
    return user;
  }
  logout() {
    this.isLogged = false;
  }
  IsAuthenticated() {
    return this.isLogged;
  }
}
