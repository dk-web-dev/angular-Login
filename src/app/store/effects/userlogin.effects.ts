import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as loginActions from '../actions/userlogin.actions';
import { UserAuthService } from 'src/app/services/user-auth.service';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserLoginEffects {
  constructor(
     private actions$: Actions,
     private userAuth: UserAuthService,
     private router:Router
     ){}


  // @Effect()
  // LogIn: Observable<any> = this.actions$.pipe(
  //   ofType(loginActions.actionLoginType.LOGIN),
  //   exhaustMap((action: loginActions.LogIn) =>
  //     this.userAuth.log(action.payload).pipe(
  //       map((user: any) => {
  //           //console.log(user);
  //         return new loginActions.LogInSuccess(user);
  //       })
  //     )
  //   )
  // );

//   @Effect({ dispatch: false })
// LogInSuccess: Observable<any> = this.actions$.pipe(
//   ofType(loginActions.actionLoginType.LOGIN_SUCCESS),
//   tap((user:loginActions.LogInSuccess) => {
//         //console.log(user.payload)
//     localStorage.setItem('access_token', "123456");
//     this.router.navigateByUrl('/dashboard')

//   })
// );
  
}
