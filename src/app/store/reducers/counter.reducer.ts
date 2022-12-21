import { createReducer, on } from '@ngrx/store';
import * as counterAction from '../actions/counter.actions';

const initialValue: number = 0;

export const counterReducer = createReducer(
  initialValue,
  on(counterAction.INCREMENT, (state) => {
    return state + 1;
  }),
  on(counterAction.DECREMENT, (state) => {
    return state - 1;
  }),
  on(counterAction.RESET, (state)=>{
    return 0;
  })
);
