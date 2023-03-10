// Section 1
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

// Section 2
export const ADD_TUTORIAL:string = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL:string = '[TUTORIAL] Remove';

// Section 3
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial