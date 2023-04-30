import { Injectable } from '@angular/core';
import {City} from "../models/city-model";
import {CITIES} from "../mock/MOCK-DATA";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  // hacked version. just grab local values
  city_list: City[] = CITIES;
  getCities(): Observable<City[]>{
    return of(this.city_list);
  }
  constructor(private httpClient: HttpClient) { }
}
