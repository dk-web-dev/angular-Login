import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import external module
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
//import shared module
import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './component/main/main.component';
import { DarkthemeComponent } from './component/darktheme/darktheme.component';
import { MainTutorialComponent } from './component/main-tutorial/main-tutorial.component';
import { CreateTutorialComponent } from './component/create-tutorial/create-tutorial.component';
import { ListTutorialComponent } from './component/list-tutorial/list-tutorial.component';
import { CounterExampleComponent } from './component/counter-example/counter-example.component';


@NgModule({
  declarations: [
    MainComponent,
    DarkthemeComponent,
    MainTutorialComponent,
    CreateTutorialComponent,
    ListTutorialComponent,
    CounterExampleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,  // <======================== IMPORT THE material module
    MatNativeDateModule, // <======================== IMPORT THE material native modules
    NgxPaginationModule, // <======================== IMPORT THE pagination module
    DashboardRoutingModule, //<====================== IMPORT routing module,
    SharedModule            //<====================== IMPORT THE shared module
  ]
})
export class DashboardModule { }
