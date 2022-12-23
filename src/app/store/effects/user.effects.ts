import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { catchError, map, mergeMap, Observable, of, switchMap } from 'rxjs';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userAuth: UserAuthService) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.userAuth.getAll().pipe(
        map(users => (new userActions.LoadUsersSuccess(users)),
        // catchError((err) => of(new userActions.LoadUsersFailure(err)))
      )
    )
  )
  )
  
}