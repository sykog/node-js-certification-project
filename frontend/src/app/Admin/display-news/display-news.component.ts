import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../../services/news.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.css']
})
export class DisplayNewsComponent implements OnInit {

  newsList: any = [];
  getSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(private newsService: NewsService, private router: Router) {
  }

  ngOnInit() {
    this.getNewsSubscription();
  }

  private getNewsSubscription = () => {
    this.getSubscription = this.newsService.getAllNews().subscribe(news => {
      this.newsList = news;
    });
  }

  ngOnDestroy() {
    if (this.getSubscription) this.getSubscription.unsubscribe();
    if (this.deleteSubscription) this.deleteSubscription.unsubscribe();
  }

  deleteNews(news) {
    if (window.confirm('Are you sure you want to delete this article?')) {
      this.deleteSubscription = this.newsService.deleteNews(news._id).subscribe(response => {
        this.getNewsSubscription();
      });
    }
  }
}
