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

  PostAnnouncement(Announcement) {
    return this.http.post<any>(this.announcementUrl + 'admin/create/', Announcement);
  }

  GetAnnouncements(): Observable<IAnnouncement[]> {
    return this.http.get<IAnnouncement[]>(this.announcementUrl + 'get/all/');
  }


}
