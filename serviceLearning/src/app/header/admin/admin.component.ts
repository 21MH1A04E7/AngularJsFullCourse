import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';
  CreateNewUser() {
    this.userService.CreateUser(
      this.name,
      this.gender,
      this.subType,
      this.status
    );
  }
}
