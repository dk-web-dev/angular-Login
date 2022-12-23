import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterExampleComponent } from './component/counter-example/counter-example.component';
import { MainTutorialComponent } from './component/main-tutorial/main-tutorial.component';
import { MainComponent } from './component/main/main.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { UsersComponent } from './component/users/users.component';

const routes: Routes = [
  {path:"dashboard",component:MainComponent},
  {path:"users",component:UsersComponent},
  {path:'tutorials',component:MainTutorialComponent},
  {path:'counter',component:CounterExampleComponent},
  {path:'userlist',component:UserlistComponent},
  {path:"**",redirectTo: "dashboard"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
