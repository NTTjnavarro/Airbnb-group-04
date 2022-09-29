import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { HouseDetail } from 'src/app/models/house-detail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }
  getHouseById(id: number
    ): Observable<HouseDetail> {
      return this.httpClient.get<HouseDetail>(environment.apiUrl+'/listings/'+id);
    }
}
