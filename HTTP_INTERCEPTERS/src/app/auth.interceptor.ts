import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();
    let cloneRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        
        if (error.status === 401) {
          const isRefresh = confirm('You want to continue this session');
          if (isRefresh) {
            this.authService.$tokenSubject.next(true);
            this.authService.$refreshSubject.next(true);
          }
        }
        return throwError(() => error);
      })
    );
  }
}
