import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../../services/chat.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  message: string;
  messages: object[] = [];
  username: string;
  userCount: number = 0;
  broadcast: string;
  messageSubscription: Subscription;
  userSubscription: Subscription;
  typingSubscription: Subscription;

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.messageSubscription = this.chatService.getMessages()
      .subscribe((messageData) => {
        this.messages.push({username: messageData.username, message: messageData.message});
        this.broadcast = '';
      });

    this.userSubscription = this.chatService.getConnectedUsersCount()
      .subscribe((userCount) => {
        this.userCount = userCount;
      });

    this.typingSubscription = this.chatService.getWhoIsTyping().subscribe(data => {
      this.broadcast = data;
    });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.typingSubscription.unsubscribe();
  }

  showUserIsTyping() {
    this.chatService.showUserIsTyping();
  }

  sendUsername() {
    if (this.username) {
      this.chatService.sendUsername(this.username);
      this.username = '';
    }
  }

  sendMessage() {
    if (this.message) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
