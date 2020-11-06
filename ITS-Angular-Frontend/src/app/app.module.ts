import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './service/message.service';
import {NavbarChapterComponent} from './components/navbar-chapter/navbar-chapter.component';
import {HeaderComponent} from './components/header/header.component';
import {MessageComponent} from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarChapterComponent,
    HeaderComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
