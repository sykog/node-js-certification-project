import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title:String
  description:String
  url: String

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.firstNews();
  }

  firstNews(){
    this.newsService.getNews().subscribe(res => {
      console.log(res);
      this.title = res[0].title
      this.description = res[0].description
      this.url = res[0].url
    })
  }

  secondNews(){
    this.newsService.getNews().subscribe(res => {
      this.title = res[1].title
      this.description = res[1].description
      this.url = res[1].url
    })
  }

  thirdNews(){
    this.newsService.getNews().subscribe(res => {
      this.title = res[2].title
      this.description = res[2].description
      this.url = res[2].url
    })
  }

}
