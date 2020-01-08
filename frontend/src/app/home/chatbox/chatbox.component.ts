import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  message : string;
  messages : string[] = [];
  subscription: Subscription;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.subscription = this.chatService.getMessages()
      .subscribe( (message: string) => {
        console.log(message);
        this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendMessage() {
    if (this.message.length > 0) {
      this.chatService.sendMessage(this.message);
    }
    this.message = '';
  }

}
