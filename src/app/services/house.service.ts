import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { HouseDetail } from 'src/app/models/house-detail';
import { environment } from 'src/environments/environment';
import { GeoLocationModel } from '../models/geoLocation.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }

  getHouseById(id: number
    ): Observable<HouseDetail> {
      return this.httpClient.get<HouseDetail>(environment.apiUrl+'/listings/'+id);
  }

  getHousesData(position: GeoLocationModel): Observable<HouseDetail[]>{
    return this.httpClient.post<HouseDetail[]>(environment.apiUrl + '/search/', position)
  }

  generateCurrentPosition(): Observable<GeoLocationModel>{
    return new Observable(obs => {
      navigator.geolocation.getCurrentPosition(
        success => {
          obs.next(
            {
              position:
              {
                lat:success.coords.latitude,
                lng:success.coords.longitude
              }
            }
          );
          obs.complete();
        },
        error => {
          obs.error(error);
        }
      );
    });
  }

  getHousesList(): Observable<HouseDetail[]>{
    return this.generateCurrentPosition().pipe(
      switchMap(this.getHousesData.bind(this))
    )
  }

}
