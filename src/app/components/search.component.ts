import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @ViewChild('queryForm') queryForm: NgForm;
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  process(){
    const query = this.queryForm.value.query;

    console.log('processing: ', query);

    this.weatherService.showWeatherData(query);
  }

}
