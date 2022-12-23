import { Tutorial } from '../app/store/models/tutorial.model';
import { ILoginUser } from './interface/user-auth/user-auth';
import { IUser } from './store/models/user.model';

/**
 * @Name global state
 * @Description this file is used for global state management
 * @Author  dharmesh
 */

export interface AppState {
  readonly tutorialData: Tutorial[];
}

export interface AppUserState {
  readonly userData: IUser[];
}

export interface AppLoggedUser {
  readonly loggedUserData: ILoginUser;
}
