import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseDetail } from '../models/house-detail';
import { GeoLocationModel } from '../models/geoLocation.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {

  private url: string = 'https://airbnb-learning-api.herokuapp.com'

  constructor(private httpClient: HttpClient) {}

  getHouseById(id: number): Observable<HouseDetail> {
    return this.httpClient.get<HouseDetail>(
       this.url + '/listings/' + id
    );
  }

  getHousesList(position: GeoLocationModel){
    return this.httpClient.post(this.url, position)
  }

}
