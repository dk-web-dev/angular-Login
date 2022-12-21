import { createAction } from '@ngrx/store';

//action
export const INCREMENT = createAction('[COUNTER] increment');
export const DECREMENT = createAction('[COUNTER] decrement');
export const RESET = createAction('[COUNTER] reset');