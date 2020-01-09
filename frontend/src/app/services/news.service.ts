import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:6500/api/topthree";
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  UrlImage0: String;
  UrlImage1: String;
  UrlImage2: String;
  constructor(private http: HttpClient) { }

  getNews():Observable<any>{
    return this.http.get<any>(apiUrl);
  }

}
