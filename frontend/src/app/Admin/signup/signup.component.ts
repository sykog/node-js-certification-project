import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm;
  danger;
  Epassword;
  Data: any = {};
  token: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm: ''
    }, {
      validators: (form) => {
        if (form.get('password').value !== form.get('confirm').value) {
          form.get('confirm').setErrors({ passwordMatch: true });
        } else {
          form.get('confirm').setErrors(null);
        }
        return null;
      }
    });
  }
  ngOnInit() {
  }

  register(username, email, password) {

    this.Data.name = username.value;
    this.Data.email = email.value;
    this.Data.password = password.value;
    // this should return the token
    this.authService.signUp(this.Data).subscribe(res => {
      console.log(res);
      this.token = res;
      if (this.Data.name !== '' && this.Data.email !== '' && this.Data.password !== '') {
        this.router.navigate(['/login']);
      }
      //localStorage.setItem('token',this.token);
    })
  }

  handleError(controlname, errorname){
    return this.signupForm.controls[controlname].hasError(errorname);
  }

}
