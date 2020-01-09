import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
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
  

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
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
      console.log(res)
      if(this.Data.email !== '' && this.Data.password !== ''){
        localStorage.setItem('token',res);
        this.router.navigate(['/addNews']);
      }
      //else this.message = "Please enter valid email and password or register."
      
    })
  }

}
