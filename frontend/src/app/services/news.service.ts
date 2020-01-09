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

  deleteNews(id): Observable<any> {
    return this.http.delete(apiUrl + "/delete-news/" + id).pipe(catchError(this.manageError));
  }

  getNewsById(id): Observable<any> {
    return this.http.get(apiUrl + "/get-news/" + id).pipe(catchError(this.manageError));
  }

  updateNews(id, news): Observable<any> {
    return this.http.put(apiUrl + "/update-news/" + id, news).pipe(catchError(this.manageError));
  }

  getAllNews() : Observable<any> {
    return this.http.get(apiUrl + "/get-news").pipe(catchError(this.manageError));
  }

  private manageError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) errorMessage = error.error.message;
    else errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
