import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }
  getHouseById(id: number
    ): Observable<any> {
      return this.httpClient.get<any>('https://airbnb-learning-api.herokuapp.com/listings/'+id);
    }
}
