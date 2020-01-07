import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {WeatherService} from "../../services/weather.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherForm;
  getSubcription: Subscription;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) {
    this.weatherForm = this.formBuilder.group({
      zip: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getSubcription.unsubscribe();
  }

  submitWeatherForm(weatherData) {
    if (this.weatherForm.valid) {
      console.log(weatherData);
      this.getSubcription = this.weatherService.getWeatherByZip(weatherData.zip).subscribe(weather => {
        console.log(weather)
      });
    }
  }
}
