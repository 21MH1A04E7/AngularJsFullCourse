import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailId: string = '';
  password: string = '';
  loginError: string = '';
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}
  onLogin() {
    const loginData = { EmailId: this.emailId, Password: this.password };
    this.authService.onLogin(loginData).subscribe({
      next: (res: any) => {
        console.log(res);
        this.authService.setDetails(JSON.stringify(res.data));
        this.authService.setToken(res.data.token);
        this.authService.setRefresh(res.data?.refreshToken);
        this.route.navigateByUrl('/home');
      },
      error: (error) => {
        alert(error);
      },
    });
  }
}
