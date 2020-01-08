import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import {Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket;
  private url : string = 'http://localhost:6500';

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('newMessage', message);
  }

  public getMessages() : Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('newMessage', (message) => {
        observer.next(message);
      });
    });
  }
}
