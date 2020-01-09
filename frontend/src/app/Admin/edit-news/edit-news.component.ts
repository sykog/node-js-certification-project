import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {NewsService} from "../../services/news.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  editNewsForm;
  urlRegex: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  id;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private newsService: NewsService,
              private route: ActivatedRoute, private router: Router) {

    this.id = this.route.snapshot.paramMap.get('id');

    this.subscription = this.newsService.getNewsById(this.id).subscribe(news => {
      console.log(news);
      this.editNewsForm = this.formBuilder.group({
        title: [news.title, [Validators.required]],
        description: [news.description, [Validators.required]],
        url: [news.url, [Validators.required, Validators.pattern(this.urlRegex)]],
        urlToImage: [news.urlToImage, [Validators.required, Validators.pattern(this.urlRegex)]],
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitNewsForm(newsData) {
    if (this.editNewsForm.valid) {
      this.newsService.updateNews(this.id, newsData).subscribe((response) => {
        this.router.navigate(['/displayNews']);
      }, error => {
        console.log(error);
      });
    }
  }

  resetNewsForm() {
    this.editNewsForm.reset();
  }

  public handleError = (controlName: string, errorName: string) => {
    if (!this.editNewsForm.controls[controlName].touched) return false;
    else return this.editNewsForm.controls[controlName].hasError(errorName);
  }
}
