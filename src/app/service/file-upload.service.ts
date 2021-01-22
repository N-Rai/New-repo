import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse, HttpEventType} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private fileUploadUrl="http://localhost:8083/users/";

  constructor(private _httpClient: HttpClient) { }

  public upload(formData){
    return this._httpClient.post<any>(this.fileUploadUrl,formData,{
      reportProgress: true,
      observe: 'events'
    });
  }
}
