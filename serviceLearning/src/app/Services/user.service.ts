import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';
@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}
  user: User[] = [
    new User('Vinay', 'Male', 'Monthly', 'Active'),
    new User('Alice', 'Female', 'Annual', 'Inactive'),
    new User('Bob', 'Male', 'Weekly', 'Active'),
  ];
  GetAllUsers() {
    return this.user;
  }
  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();
  onShowUserDetails(user: User) {
    this.OnUserDetailsClicked.emit(user);
  }
  CreateUser(name: string, gender: string, subType: string, status: string) {
    let newUser = new User(name, gender, subType, status);
    this.logger.LoggMessage(name, status);
    this.user.push(newUser);
  }
}
