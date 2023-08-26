import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) { }
    public getCityWeather<T>(city:string) : Observable<T>{
        return this.http.get<T>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=10a989f11a6e56bd11033eb506b8ada0`)
    }
}