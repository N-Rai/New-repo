import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AnnouncementService } from '../../service/announcement.service';
import { element } from 'protractor';

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
  public topicNotExists: boolean = false;
  public action: string = "POST";


  constructor(public _announceService: AnnouncementService,
    public _authService: AuthService) {
  }

  ngOnInit(): void {
    this.GetAllAnnouncements();
  }

  //Displays all latest 7 announcements in the table
  DisplayAnnouncements() {
    if (this.announcementList.length > 6)
      this.AnnouncementsToDisplay = this.announcementList.slice(this.announcementList.length - 7, this.announcementList.length);
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
    if (this.action == "UPDATE") {
      this.action = "POST";
      this._announceService.UpdateAnnouncement(this.announcementData).subscribe(
        res => {

        },
        error => {
          console.log(error);
          if (error.error.status == 404) {
            this.topicNotExists = true;
          } else {
            this.topicNotExists = false;
            this.Clear();
          }
          this.GetAllAnnouncements();
        }
      );
      return;
    }
    this._announceService.PostAnnouncement(this.announcementData)
      .subscribe(
        res => {

        },
        error => {
          console.log(error);
          if (error.error.status == 409) {
            this.topicExists = true;
          } else {
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

  EditAnnouncement(announcementToEdit: any) {
    this.announcementData = {
      topic: announcementToEdit.topic,
      text: announcementToEdit.text
    }
    this.action ="UPDATE";
  }

  DeleteAnnouncement(topic: string) {
    this._announceService.DeleteAnnouncement(topic)
      .subscribe(
        data => {
          console.log(data)
        },
        error => {
          console.log(error)
          this.GetAllAnnouncements()
        }
      );


  }


}




