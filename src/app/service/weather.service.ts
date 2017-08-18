import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core'
import 'rxjs/add/operator/map';


import { Weather } from '../weather';

@Injectable()
export class WeatherService {

  private baseUrl: string ='http://api.openweathermap.org/data/2.5/weather';
  private APPID : string ='3ffb69879d737258203f1200b124602d';
  serviceEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor(private http : Http) { }

  getWeatherData(country : string) {
    return this.http.get(this.baseUrl,
      {
        params: 
        {
          q: country,
          appid: this.APPID
        }
      }
    ).map((resp: Response) => resp.json())
  }

  showWeatherData(country : string) {
    this.getWeatherData(country).subscribe(data => {
      console.log(data);
      this.serviceEmitter.emit(data);
    })
  }
}
