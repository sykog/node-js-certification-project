import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:6500/api/get-sports";
@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }

  getSports(): Observable<any>{
    return this.http.get<any>(apiUrl);
  }
}
