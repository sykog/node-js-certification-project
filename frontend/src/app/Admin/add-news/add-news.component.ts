import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {NewsService} from "../../services/news.service";
import {error} from "util";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  addNewsForm;
  urlRegex : string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  submitText : string;

  constructor(private formBuilder: FormBuilder, private newsService: NewsService) {
    this.addNewsForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      url: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
      urlToImage: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
    });
  }

  ngOnInit() {
  }

  submitNewsForm(newsData) {
    if (this.addNewsForm.valid) {
      this.newsService.addNews(newsData).subscribe((response) => {
        this.submitText = 'News article added';
        this.addNewsForm.reset();
      }, error => {
        console.log(error);
        this.submitText = 'Title already exists'
      });
    }
  }

  resetNewsForm() {
    this.addNewsForm.reset();
  }

  public handleError = (controlName: string, errorName: string) => {
    if (!this.addNewsForm.controls[controlName].touched) return false;
    else return this.addNewsForm.controls[controlName].hasError(errorName);
  }
}
