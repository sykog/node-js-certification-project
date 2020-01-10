import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  subject = new Subject();
  constructor() { }

  getMsg(){
    return this.subject.asObservable(); 
  }

  setMsg(){
    this.subject.next();
  }
}
