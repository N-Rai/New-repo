// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageComponent} from './components/message/message.component';
import { LoginComponent } from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
