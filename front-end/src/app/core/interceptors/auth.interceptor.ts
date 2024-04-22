import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let newReq = req.clone();

    const bearer = localStorage.getItem('MasterRp');

    if (bearer) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + bearer),
      });
    }

    return next.handle(newReq).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          (error.status === 403 || error.status === 401)
        ) {
          const newToken = prompt('Insira o token de acesso :');

          if (newToken) {
            localStorage.setItem('MasterRp', newToken);

            window.location.reload();
          }

          return throwError(error);
        }
      })
    );
  }
}
