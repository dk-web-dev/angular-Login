import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserAuthService } from '../services/user-auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  
  constructor(private userAuth: UserAuthService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    /**
     * @Name getToken
     * @Description set authentication token in api request header
     * @Author Dharmesh
     */
    const authToken = this.userAuth.getToken();
     // console.log("authToken", authToken);
    request = request.clone({
      setHeaders: {
        "Content-Type": "application/json",
         Authentication: "Bearer " + authToken,

      }
  })

    return next.handle(request);
  }
}
