import { Action } from '@ngrx/store';
import { IUser } from '../models/user.model';
import { UserActions, UserActionTypes } from '../actions/user.actions';

//export const userFeatureKey = 'usersState';

// export interface State {
//   users: IUser[],
//   error:string
// }

export const initialState: IUser[] =[
  // {
  //   _id: '63998e52f5ebee8b981562f6',
  //   username: 'himanshu',
  //   email: 'himanshu@gmail.com',
  //   password: '123456',
  // },
  // {
  //   _id: '63998e52f5ebee8b981562f6',
  //   username: 'himanshu',
  //   email: 'himanshu@gmail.com',
  //   password: '123456',
  // },
  // {
  //   _id: '63998e52f5ebee8b981562f6',
  //   username: 'himanshu',
  //   email: 'himanshu@gmail.com',
  //   password: '123456',
  // }
]
  
export interface ActionWithPayloadInterface extends Action {
  payload?: any;
}

// Section 2
export function UserReducer(state = initialState, action: ActionWithPayloadInterface) {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      //  console.log("load action" ,state)
      return state;
    case UserActionTypes.LoadUsersSuccess:
        // console.log("payload",action.payload)
      return [ ...state,...action.payload];
    // case UserActionTypes.LoadUsersFailure:
    //   return [ ...state, action.payload.error ];
    default:
        // console.log("default",state)
      return state;
  }
}
