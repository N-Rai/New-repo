import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  public messageFromServer: string;

  constructor(private http: MessageService) { }

  ngOnInit(): void {
  }

  getMessage() {
    this.http.getMessage().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  private handleSuccessfulResponse(response) {
    this.messageFromServer = response.text;
  }

  private handleErrorResponse(error) {
    this.messageFromServer = error.message;
    console.log(error.error.message);
  }
}
