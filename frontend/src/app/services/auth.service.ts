import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(credentials: any): Observable<any> {

    //console.log(credentials)
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    //console.log(credentials)
    return this.http.post<any>("http://localhost:6500/api/register-admin", JSON.stringify(credentials), {
      headers: headers
    })
  }

  login(credentials: any): Observable<any> {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post<any>("http://localhost:6500/api/login-admin", JSON.stringify(credentials), {
      headers: headers
    })
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

}
