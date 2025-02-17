import { Component, inject, Inject } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private authService: AuthService = Inject(AuthService);
  private router: Router = inject(Router);
  title = 'HTTP_INTERCEPTERS';
  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }
}
