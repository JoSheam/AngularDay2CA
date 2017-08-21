import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  private data: any;
  private error: any;
  private weatherServiceSub: Subscription;
  private showdata: boolean;
  private showerror: boolean;
  private emsg : any;

  constructor(private weatherService: WeatherService) { };

  ngOnInit() {
    this.weatherServiceSub = this.weatherService.serviceEmitter.subscribe
    (
      (data) => {
        this.data = data;
        this.showdata=false;
        this.showerror=false;
        if(this.data.status == null){
          this.showdata=true;
        }
        else {
          this.showerror=true;
          if (this.data.status === 404) {
            this.emsg = "City Not Found";
          }
        }
      }
    );
  }
}
