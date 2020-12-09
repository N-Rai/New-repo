
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


import { MessageComponent} from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent} from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeesTheorieComponent } from './components/navbar-chapter/nv-components/lees-theorie/lees-theorie.component';
import { SchrPraktishComponent } from './components/navbar-chapter/nv-components/schr-praktish/schr-praktish.component';
import { SpellTheorieComponent } from './components/navbar-chapter/nv-components/spell-theorie/spell-theorie.component';
import { SpellPraktishComponent } from './components/navbar-chapter/nv-components/spell-praktish/spell-praktish.component';
import { LeesPraktishComponent } from './components/navbar-chapter/nv-components/lees-praktish/lees-praktish.component';
import {AnnouncementComponent} from './components/announcement/announcement.component';

import {AuthService} from './service/auth.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './service/token-interceptor.service';
import { ContactComponent } from './components/contact/contact.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    FooterComponent,
    LeesTheorieComponent,
    SchrPraktishComponent,
    SpellTheorieComponent,
    SpellPraktishComponent,
    LeesPraktishComponent,
    AnnouncementComponent,
    ContactComponent,
    AboutMeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
