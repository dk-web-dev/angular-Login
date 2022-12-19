import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './Auth-guard/auth-guard.guard';

import { NopageComponent } from './component/nopage/nopage.component';

const routes: Routes = [
 
  {
    path: 'auth',
    loadChildren: () => import('./user-auth/user-auth.module').then(mode => mode.UserAuthModule)
  },
  {
    path:'',
    loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
    canActivate:[AuthGuardGuard]
  },
  {path:"**",component:NopageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
