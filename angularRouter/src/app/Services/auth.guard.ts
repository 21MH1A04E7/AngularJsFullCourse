import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.IsAuthenticated()) {
      return true;
    } else {
      // this.router.navigateByUrl('Login');
      this.router.navigate(['Login']);
      return false;
    }
  }

  //canActivateChild
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.IsAuthenticated()) {
      return true;
    } else {
      // this.router.navigateByUrl('Login');
      this.router.navigate(['Login']);
      return false;
    }
  }
}
