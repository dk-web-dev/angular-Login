import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 

import { TutorialReducer } from './reducers/tutorial.reducer';
import { counterReducer } from './reducers/counter.reducer';
import { UserReducer } from './reducers/user.reducer';
import { LoggedInUser } from './reducers/userlogin.reducers';

import { EffectsModule } from '@ngrx/effects'; 
import { UserEffects } from './effects/user.effects'; 
import { UserLoginEffects } from './effects/userlogin.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      tutorialData: TutorialReducer,   //<======= register tuturial reducer
      counterData: counterReducer,     //<======= regsiter counter reducer
      userData:UserReducer,             //<======= regsiter user reducer
      loggedUserData:LoggedInUser       //<======= register loggeduser reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge:100,// Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true,
    }),
    EffectsModule.forRoot([UserEffects,UserLoginEffects])  //<==== register effect-modules
  ]
})
export class StoreModules { }
