import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserLogin } from '../models/userlogin.model';




/**
 * @Name Selectors
 * @Description this is used to create  loginuserdata  store state selector file
 * @Author dharmesh
 */

const getUserFeatureState = createFeatureSelector<any>('loggedUserData'); //here  loggedUserData is name of reducer 

export const getLoggedUserData = createSelector(
    getUserFeatureState,
    state => state
)
