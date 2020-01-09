import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";

const apiUrl = "http://localhost:6500/api";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  UrlImage0: String;
  UrlImage1: String;
  UrlImage2: String;
  constructor(private http: HttpClient) { }

  getNews():Observable<any>{
    return this.http.get<any>(apiUrl + "/topthree");
  }

  addNews(news): Observable<any> {
    return this.http.post(apiUrl + "/add-news", news).pipe(catchError(this.manageError));
  }

  private manageError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) errorMessage = error.error.message;
    else errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
