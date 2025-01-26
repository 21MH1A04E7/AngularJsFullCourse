import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;
  authService: AuthService = inject(AuthService);
  route: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  user: User;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data) => {
      const logout = Boolean(data.get('logout'));
      if (logout) {
        this.authService.logout();
        alert(`You are now logged out. ${this.authService.isLogged}`);
      }
    });
  }
  OnLoginClicked() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;
    this.user = this.authService.login(username, password);
    if (!this.user) {
      alert('The login credential is not corrent');
    } else {
      alert(`Welcom ${this.user.name} you are login!`);
      this.route.navigate(['/Courses']);
    }
  }
}
