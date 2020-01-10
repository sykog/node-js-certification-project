import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MsgService } from 'src/app/services/msg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false;
  token: String
  constructor(private authService: AuthService, private msgService: MsgService) { }

  ngOnInit() {
   this.msgService.getMsg().subscribe(() => {
     this.token = this.authService.getToken()
     console.log(this.token)
   })
  }

  handleClick(){
    this.admin = true
  }

}
