import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  selectedUser: User;
  constructor(private userService: UserService) {}
  // userService = Inject(UserService);

  ngOnInit(): void {
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      // console.log(this.selectedUser);
    });
  }
}
