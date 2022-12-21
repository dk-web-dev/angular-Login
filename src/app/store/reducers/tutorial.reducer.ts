import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

// Section 1
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com',
};

export interface ActionWithPayloadInterface extends Action {
  payload?: any;
}
// Section 2
export function TutorialReducer(
  state: Tutorial[] | undefined = [initialState],
  action: ActionWithPayloadInterface
) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
         console.log('payload', action.payload); // new data store here 
         return [...state, action.payload];   // added into the state
         
    case TutorialActions.REMOVE_TUTORIAL:
         console.log('payload', action.payload); // id 
         const newState = [...state];         // assigned the data in new variable newState
         newState.splice(action.payload, 1);  // remove one element using splie at specific index
         return newState;                   // return newState
    default:
      return state;
  }
}
