import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user: any;
  isLoading: boolean = true;
  ngOnInit(): void {
    this.authService.$refreshSubject.subscribe(() => {
      this.fetchUser();
    });
    this.fetchUser();
  }
  fetchUser() {
    this.authService.getUsers().subscribe({
      next: (res: any) => {
        console.log(res.data[0]);
        this.user = res.data[0];
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      },
    });
  }
}
