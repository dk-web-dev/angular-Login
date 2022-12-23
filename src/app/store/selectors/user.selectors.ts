import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '../models/user.model';



/**
 * @Name Selectors
 * @Description this is user to create user state selector file
 * @Author dharmesh
 */


const getUserFeatureState = createFeatureSelector<IUser[]>('userData'); //here  userData is name of reducer 

export const getUsers = createSelector(
    getUserFeatureState,
    state => state
)

// export const getError = createSelector(
//     getUserFeatureState,
//     state => state.error
// )