import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  addNewsForm;;

  constructor(private formBuilder: FormBuilder) { 
    this.addNewsForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', [Validators.required]],
      urlToImage: ['', [Validators.required]],
      publishedAt: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}