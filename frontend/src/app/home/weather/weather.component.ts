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
  weatherData: object = {city: '', temperature: '', icon: '', description: '', humidity: ''};

  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) {
    this.weatherForm = this.formBuilder.group({
      zip: ['', [Validators.required, Validators.pattern('^\\d{5}$')]]
    });
  }

  ngOnInit() {
    this.getSubcription = this.weatherService.getWeatherByZip('08820').subscribe(weatherData => {
      this.weatherData = weatherData;
    });
  }

  ngOnDestroy() {
    this.getSubcription.unsubscribe();
  }

  submitWeatherForm(zipData) {
    if (this.weatherForm.valid) {
      this.getSubcription = this.weatherService.getWeatherByZip(zipData.zip).subscribe(weatherData => {
        this.weatherData = weatherData;
        this.errorMessage = null;
      });
    } else {
      this.errorMessage = "Invalid Zip Code";
    }
  }
}
