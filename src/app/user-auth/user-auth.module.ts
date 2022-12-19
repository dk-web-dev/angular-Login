import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import external module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';

import { UserAuthRoutingModule } from './user-auth-routing.module';

//import share module
import { SharedModule } from '../shared/shared.module';

//import component
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [RegisterComponent, ForgotComponent, LoginComponent],
  imports: [
    CommonModule,
    MaterialModule, // <======================== IMPORT THE material module
    MatNativeDateModule, // <======================== IMPORT THE material native modules
    UserAuthRoutingModule,  //<====================== IMPORT routing module
    FormsModule,            //<====================== IMPORT THE form module
    ReactiveFormsModule,    //<====================== IMPORT THE reactive form module
    SharedModule            //<====================== IMPORT THE share module
  ],
  exports: [],
  providers: [ ]  // <======================= PROVIDE THE SERVICE
})
export class UserAuthModule {}
