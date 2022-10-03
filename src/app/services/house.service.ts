import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { HouseDetail } from 'src/app/models/house-detail';
import { environment } from 'src/environments/environment';
import { GeoLocationModel } from '../models/geo-location.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }

  getHouseById(id: number
    ): Observable<HouseDetail> {
      return this.httpClient.get<HouseDetail>(environment.apiUrl+'/listings/'+id);
  }


  //TO DO: REFACTOR PLEASE
  getHousesData(): Observable<HouseDetail[]>{
    return this.generateCurrentPosition()
    .pipe(
      switchMap(pos => {
        const body = {
          position: {
            lat: pos.position.lat,
            lng: pos.position.lng
          }
        }
        return this.httpClient.post<HouseDetail[]>(environment.apiUrl + '/search', body)
      })
    )
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

}
