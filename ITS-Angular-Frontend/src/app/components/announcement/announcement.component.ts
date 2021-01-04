import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {AnnouncementService} from '../../service/announcement.service';

export class announcement{
  topic : string;
  text: string;
  createdAt: string;
  updatedAt: string;

}


@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  announcementData={
    topic: undefined,
    text: undefined
  };

  public announcementList = [];

  constructor( public _announceService: AnnouncementService,
               public _authService: AuthService) { }

  ngOnInit(): void {
   this.GetAnnouncements()
    console.log(this.announcementList);
  }

  UploadAnnouncement() {
    console.log(this.announcementData);
    this._announceService.PostAnnouncement(this.announcementData)
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }

  GetAnnouncements() {
    this._announceService.GetAnnouncements()
      .subscribe(data => this.announcementList = data );

  }

}




