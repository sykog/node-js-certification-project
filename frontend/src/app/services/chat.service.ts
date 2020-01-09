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

  public sendUsername(username) {
    this.socket.emit('submitUsername', username);
  }

  public sendMessage(message) {
    this.socket.emit('newMessage', message);
  }

  public showUserIsTyping() {
    this.socket.emit("typing");
  }

  public getConnectedUsersCount() : Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('userList', (data) => {
        observer.next(data.sockets.length);
      });
    });
  }

  public getMessages() : Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('newMessage', (message: object) => {
        observer.next(message);
      });
    });
  }

  public getWhoIsTyping(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('typing', (data) => {
        observer.next(data.username + " is typing...");
      });
    });
  }
}
