import { NgModule } from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {LeesTheorieComponent} from './components/navbar-chapter/nv-components/lees-theorie/lees-theorie.component';
import {LeesPraktishComponent} from './components/navbar-chapter/nv-components/lees-praktish/lees-praktish.component';
import {SchrTheorieComponent} from './components/navbar-chapter/nv-components/schr-theorie/schr-theorie.component';
import {SchrPraktishComponent} from './components/navbar-chapter/nv-components/schr-praktish/schr-praktish.component';
import {SpellPraktishComponent} from './components/navbar-chapter/nv-components/spell-praktish/spell-praktish.component';
import {SpellTheorieComponent} from './components/navbar-chapter/nv-components/spell-theorie/spell-theorie.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';
import {AboutMeComponent} from './components/about-me/about-me.component';

import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: AnnouncementComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'lees-theorie', component: LeesTheorieComponent, canActivate: [AuthGuard]},
  {path: 'lees-praktish', component: LeesPraktishComponent, canActivate: [AuthGuard]},
  {path: 'schr-theorie', component: SchrTheorieComponent,  canActivate: [AuthGuard]},
  {path: 'schr-praktish', component: SchrPraktishComponent, canActivate: [AuthGuard]},
  {path: 'spell-theorie', component: SpellTheorieComponent, canActivate: [AuthGuard]},
  {path: 'spell-praktish', component: SpellPraktishComponent, canActivate: [AuthGuard]}


];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

