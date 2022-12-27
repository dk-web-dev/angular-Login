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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; 

//import own user-auth module
import { UserAuthModule } from './user-auth/user-auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

//import share module
import { SharedModule } from './shared/shared.module';

//component
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NopageComponent } from './component/nopage/nopage.component';


import { StoreModules } from './store/store.module';  // import store.module


@NgModule({
  declarations: [AppComponent, NopageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    StoreModules,  //========== register store.module file
    ServiceWorkerModule.register('ngsw-worker.js', {
       //enabled: environment.production,
      registrationStrategy: "registerImmediately"
    })  
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
