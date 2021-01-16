import {Component, OnInit, ViewChild} from '@angular/core';
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
    this.GetAllAnnouncements();
  }

  //Displays all latest 7 announcements in the table
  DisplayAnnouncements() {
    if(this.announcementList.length > 6)
    this.AnnouncementsToDisplay = this.announcementList.slice( this.announcementList.length - 7, this.announcementList.length);
    else this.AnnouncementsToDisplay = this.announcementList;
    //console.log("Announcement2display"+this.AnnouncementsToDisplay);
  }

  //Gets all the announcements
  GetAllAnnouncements() {
    this._announceService.GetAnnouncements()
      .subscribe((data: any[]) => {
        console.log(data);
        this.announcementList = data;
        this.DisplayAnnouncements();
      });
  }

  //Posts an announcement in the database
  UploadAnnouncement() {
    this._announceService.PostAnnouncement(this.announcementData)
      .subscribe(
        res => {

        },
        error => {
          console.log(error);
          if (error.error.status == 409) {
            this.topicExists = true;
          }else{
            this.topicExists = false;
            this.Clear();
          }
          this.GetAllAnnouncements();
        }
      );
  }

  //Clears the input fields after successful post
  private Clear() {
    this.announcementData.topic = "";
    this.announcementData.text = "";

  }

  EditAnnouncement(id) {

  }

  DeleteAnnouncement(id: number) {
    this._announceService.DeleteAnnouncement(id)
      .subscribe(
        data => {
          console.log(data)
          this.reloadData();
        },
        error => console.log(error)
      );


  }

  private reloadData() {
    this._announceService.GetAnnouncements()
  }
}




