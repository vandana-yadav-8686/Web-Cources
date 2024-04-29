
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../Service/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private toast: NgToastService,
    private Router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const Token = this.auth.getToken();
    if (Token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${Token}` }, // "Bearer " +Token
      });
    }

    return next.handle(request).pipe(
      //for 401 error token expired
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.toast.warning({
              detail: 'Warning',
              summary: 'Token is expired, Please Login again',
            });
            this.Router.navigate(['/login']);
       
          }
        }
        return throwError(() => new Error('Some new error occured'));
      })
    );
  }

}
//next use this  interceptor in module.ts file in providers we need to provide then.
