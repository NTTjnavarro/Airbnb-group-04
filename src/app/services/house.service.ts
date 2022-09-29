import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HouseDetail } from '../models/house-detail';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }
  getHouseById(id: number
    ): Observable<HouseDetail> {
      return this.httpClient.get<HouseDetail>('https://airbnb-learning-api.herokuapp.com/listings/'+id);
    }
}
