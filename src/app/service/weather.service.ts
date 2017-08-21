import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core'
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  private baseUrl: string ='http://api.openweathermap.org/data/2.5/weather';
  private APPID : string ='3ffb69879d737258203f1200b124602d';
  private resp : Response;
  serviceEmitter : EventEmitter<any> = new EventEmitter<any>();

  constructor(private http : Http) { }

  getWeatherData (country : string) {
    this.http.get(this.baseUrl,
    {
      params: 
      {
        q: country,
        appid: this.APPID,
        units: "metric",
      }
    }
  )
  .map(res => res.json())
  .subscribe(
    (data) => 
    {
      this.serviceEmitter.emit(data);
    },
    (err) =>
    {
      this.serviceEmitter.emit(err);
    }
  );
  }
} 