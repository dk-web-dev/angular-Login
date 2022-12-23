import { Action } from "@ngrx/store";
import { loginAction,actionLoginType } from "../actions/userlogin.actions";
import { IUserLogin } from "../models/userlogin.model";


export const initialState ={} as IUserLogin

export interface ActionWithPayloadInterface extends Action {
    payload?: any;
  }

export function LoggedInUser(state=initialState,action:ActionWithPayloadInterface){
    switch(action.type){
        case actionLoginType.LOGIN:
             console.log("payloadssss",action.payload);
            // return state;
            return {...state,...action.payload};

        //  case actionLoginType.LOGIN_SUCCESS:
        //     console.log("payload for login",action.payload)
        //     return {...state,...action.payload};
        
        default:
             return state;         
    }
}