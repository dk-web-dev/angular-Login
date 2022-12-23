import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//interceptor
import { AuthInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';

import { MaterialModule } from './material/material.module';
import { MatNativeDateModule } from '@angular/material/core';

//import own user-auth module
import { UserAuthModule } from './user-auth/user-auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

//import share module
import { SharedModule } from './shared/shared.module';

//component
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NopageComponent } from './component/nopage/nopage.component';

//store
import { StoreModule } from '@ngrx/store';                         // import store
import { StoreDevtoolsModule } from '@ngrx/store-devtools';        // import store devtools
import { TutorialReducer } from './store/reducers/tutorial.reducer'; // tutorial-reducer
import { counterReducer } from './store/reducers/counter.reducer';  // counter-reducer
import { UserReducer } from './store/reducers/user.reducer';   // user-reducer
import { LoggedInUser } from './store/reducers/userlogin.reducers'; // loggedUdser reducers

//effect
import { EffectsModule } from '@ngrx/effects';           // import effectmodule
import { UserEffects } from './store/effects/user.effects'; // import user-effect module
import { UserLoginEffects } from './store/effects/userlogin.effects';

import { StoreModules } from './store/store.module';  //<== import store.module

@NgModule({
  declarations: [AppComponent, NopageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),  //<==== ToastrModule added
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    UserAuthModule,
    DashboardModule,
    SharedModule,
    StoreModules  //<========== register store.module file
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
