import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IAnnouncement} from '../announcement';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) {
  }


  private announcementUrl = 'http://localhost:8083/announcements/';

  //Create an announcement
  PostAnnouncement(Announcement) {
    return this.http.post<any>(this.announcementUrl + 'admin/create/', Announcement);
  }

  //Get all the announcements
  GetAnnouncements(): Observable<IAnnouncement[]> {
    return this.http.get<IAnnouncement[]>(this.announcementUrl + 'get/all/');
  }

  //Update specific announcement
  UpdateAnnouncement(value: any): Observable<any>{
    return this.http.put(this.announcementUrl + 'admin/update/', value)
  }

  //Delete the announcement
  DeleteAnnouncement(topic: string) {
    return this.http.delete(this.announcementUrl+'admin/delete?topic='+topic)
  }
}
