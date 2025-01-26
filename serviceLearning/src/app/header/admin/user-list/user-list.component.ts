import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  userList: User[] = this.userService.GetAllUsers();
  ShowUserDetails(user: User) {
    this.userService.onShowUserDetails(user);
  }
}
