import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SecurityService} from "./security.service";
import { catchError } from 'rxjs/operators';
import { Router} from '@angular/router';
import { throwError, fromEvent, of } from 'rxjs';


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private securityService: SecurityService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + this.securityService.getToken()
      }
    });
    return next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));
  }


  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    
    if (err.status === 401 || err.status === 403) {
        

      console.log(err);
        this.securityService.removeToken();
        this.router.navigate(['/login']);
        
        
        return of(err.message); 
    }
    return throwError(err);
}



}
