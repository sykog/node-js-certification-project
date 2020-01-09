import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false;
  token;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  handleClick(){
    this.admin = true
    this.token = this.authService.getToken();
    console.log(this.token)
  }

}
