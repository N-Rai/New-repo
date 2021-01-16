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
  UpdateAnnouncement(id: number, value: any): Observable<any>{
    return this.http.put(this.announcementUrl + '', value)
  }

  //Delete the announcement
  DeleteAnnouncement(id: number) {
    return this.http.delete(this.announcementUrl+'')
  }
}
