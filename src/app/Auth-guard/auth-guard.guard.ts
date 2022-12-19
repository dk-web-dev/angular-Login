import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable} from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
 
  constructor(
    private userAuth: UserAuthService,
    private router:Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      /**
       * @Name AuthGuard
       * @Description check for userAuth is logged or not and redirection
       * @Author Dharmesh
       */
      if (!this.userAuth.isLoggedIn) {
        window.alert("Access not allowed!");
        this.router.navigate(['/auth/login']);
      }
      return true;
  }
  
}
