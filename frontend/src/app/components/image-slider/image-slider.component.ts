import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  UrlToImage0 : String
  UrlToImage1 : String
  UrlToImage2 : String
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(res => {
      this.UrlToImage0 = res[0].UrlToImage
      this.UrlToImage1 = res[1].UrlToImage
      this.UrlToImage2 = res[2].UrlToImage
    })
  }
}