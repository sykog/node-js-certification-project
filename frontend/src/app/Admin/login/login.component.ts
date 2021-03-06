import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MsgService } from 'src/app/services/msg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  Data: any = {};
  message: String;
  

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private msgService: MsgService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(email, password){
    
    this.Data.email = email.value;
    this.Data.password = password.value;
    this.authService.login(this.Data).subscribe(res =>{

      if(res){
         localStorage.setItem('token',res);
         this.msgService.setMsg();
         this.router.navigate(['/addNews']);
        }

    },error => {
      this.message = "Please enter correct email and password"
    })
  }

}
