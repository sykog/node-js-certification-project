import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm;
  submitText: string;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  submitContactForm(contactData) {
    if (this.contactForm.valid) {
      this.submitText = "We appreciate your feedback!";
      this.contactForm.reset();
    }
  }

  public handleError = (controlName: string, errorName: string) => {
    if (!this.contactForm.controls[controlName].touched) return false;
    else return this.contactForm.controls[controlName].hasError(errorName);
  }
}
