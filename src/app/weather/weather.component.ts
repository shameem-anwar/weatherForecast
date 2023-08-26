import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  cityName: string
  currentWeather :any

  constructor(
    private weatherService:WeatherService
  ){
    this.cityName = ''
  }

  ngOnInit(): void{}

  getWeatherInfo(): void{
    this.weatherService.getCityWeather(this.cityName).subscribe(res=>{
      this.currentWeather = res
      console.log(res)
    },
    error => console.log('oops something went wrong. Try again later...', error))
  }
}
