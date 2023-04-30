import { Component } from '@angular/core';
import {City} from "./models/city-model";
import {CityService} from "./services/city.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  city_list: City[] | undefined;
  focused_city: City | undefined;

  getCities(): void{
    this.cityService.getCities()
      .subscribe(fetched =>{
        this.city_list = fetched;
        console.table(this.city_list);
      })
  }
  displayCityDetail(c: City): void{
    this.focused_city = c;
  }

  constructor(private cityService : CityService) {

  }
}
