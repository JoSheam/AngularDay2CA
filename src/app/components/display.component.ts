import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  private data : any = {} ;
  private weatherServiceSub : Subscription;
  constructor(private weatherService : WeatherService) { };

  ngOnInit() { 
    this.weatherServiceSub = this.weatherService.serviceEmitter.subscribe((data) => {
      this.data = data
    });   
  }
}
