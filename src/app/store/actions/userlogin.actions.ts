import { Action } from "@ngrx/store";

export enum actionLoginType {
    LOGIN = '[LOGIN] login',
    LOGIN_SUCCESS = '[LOGIN] success',
    LOGIN_FAILED = '[LOGIN] failed'
  }

  export class LogIn implements Action {
    readonly type = actionLoginType.LOGIN;
    constructor(public payload: any) {}
  }

  export class LogInSuccess implements Action {
    readonly type = actionLoginType.LOGIN_SUCCESS;
    constructor(public payload: any) {}
  }

  export class LogInFailure implements Action {
    readonly type = actionLoginType.LOGIN_FAILED;
    constructor(public payload: any) {}
  }

  export type loginAction = LogIn | LogInSuccess | LogInFailure;