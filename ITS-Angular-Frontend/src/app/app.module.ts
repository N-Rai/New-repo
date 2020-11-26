;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageComponent} from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { LinksComponent } from './components/links/links.component';
import { FooterComponent } from './components/footer/footer.component';





// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    AnnouncementComponent,
    LinksComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
