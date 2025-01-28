import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { Course } from '../Models/course';
import { CourseService } from './course.service';

export interface IDeactivateComponent {
  canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}
@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<IDeactivateComponent>,
    Resolve<Course[]>
{
  authService: AuthService = inject(AuthService);
  courseService: CourseService = inject(CourseService);
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
  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit();
  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Course[] | Observable<Course[]> | Promise<Course[]> {
    // let courseList: Course[] = [];
    // this.courseService.getAllcourses().subscribe({
    //   next: (courses: Course[]) => {
    //     courseList = courses;
    //   },
    // });
    // return courseList;
    return this.courseService.getAllcourses();
  }
}
