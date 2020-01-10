import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:6500/api/topthree";
const apiUrl2 = "http://localhost:6500/api/";
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

  addNews(data: any): Observable<any>{
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token'))
    .set('Content-Type','application/json');

    return this.http.post<any>(apiUrl2,JSON.stringify(data),{
      headers:headers
    })
  }

  getNewsFromAdmin(): Observable<any>{
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token'))

    return this.http.get<any>(apiUrl2,{
      headers:headers
    });
    
  }

  editNews(data: any,id: any): Observable<any>{
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token'))
    .set('Content-Type','application/json');

    return this.http.put<any>(apiUrl2 + id,JSON.stringify(data),{
      headers:headers
    })
  }

  deleteNews(id: any): Observable<any>{
    const headers = new HttpHeaders()
    .set('Authorization', localStorage.getItem('token'))
    .set('Content-Type','application/json');

    return this.http.delete<any>(apiUrl2 + id,{
      headers:headers
    })
  }

}