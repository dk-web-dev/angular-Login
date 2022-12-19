import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import external module
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';

//import shared module
import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './component/main/main.component';
import { DarkthemeComponent } from './component/darktheme/darktheme.component';



@NgModule({
  declarations: [
    MainComponent,
    DarkthemeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,  // <======================== IMPORT THE material module
    MatNativeDateModule, // <======================== IMPORT THE material native modules
    NgxPaginationModule, // <======================== IMPORT THE pagination module
    DashboardRoutingModule, //<====================== IMPORT routing module,
    SharedModule            //<====================== IMPORT THE shared module
  ]
})
export class DashboardModule { }
