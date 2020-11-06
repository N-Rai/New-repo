import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

class MessageWelcome {
  private message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor( private  http: HttpClient) { }

  getMessage() {
    return this.http.get<MessageWelcome>('http://localhost:8080/welcome-message');

    console.log('Message service executed');

  }
}
