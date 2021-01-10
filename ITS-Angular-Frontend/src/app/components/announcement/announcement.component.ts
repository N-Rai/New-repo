import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {AnnouncementService} from '../../service/announcement.service';
import {element} from 'protractor';

export class announcement {
  topic: string;
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
  announcementData = {
    topic: undefined,
    text: undefined
  };

  public announcementList = [];
  public AnnouncementsToDisplay = [];
  public topicExists: boolean = false;


  constructor(public _announceService: AnnouncementService,
              public _authService: AuthService) {
  }

  ngOnInit(): void {
    this.GetAnnouncements();
  }

  DisplayAnnouncements() {
    if(this.announcementList.length > 7)
    this.AnnouncementsToDisplay = this.announcementList.slice( this.announcementList.length - 7, this.announcementList.length);
    else this.AnnouncementsToDisplay = this.announcementList;
    console.log("Announcement2display"+this.AnnouncementsToDisplay);
  }

  GetAnnouncements() {
    this._announceService.GetAnnouncements()
      .subscribe((data: any[]) => {
        console.log(data);
        this.announcementList = data;
        this.DisplayAnnouncements();
      });


  }

  UploadAnnouncement() {
    this._announceService.PostAnnouncement(this.announcementData)
      .subscribe(
        res => {

        },
        error => {
          console.log(error);
          this.topicExists = error.error.status == 409 ? true : false;
          this.GetAnnouncements();
        }
      );
  }

}




