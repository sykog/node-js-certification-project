import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm;
  danger;
  Epassword;

  constructor(private formBuilder: FormBuilder) { 
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ''
    },{
      validators: (form) =>{
        if(form.get('password').value !== form.get('confirm').value){
          form.get('confirm').setErrors({passwordMatch: true});
        } else {
          form.get('confirm').setErrors(null);
        }
        return null;
      }
    });
  }
  ngOnInit() {
  }

 
  

}
