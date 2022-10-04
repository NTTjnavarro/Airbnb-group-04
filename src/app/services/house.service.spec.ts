import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_DETAIL_HOUSE, HouseDetail } from '../models/house-detail';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HouseService } from './house.service';
import { DEFAULT_GEO_LOCATION, GeoLocationModel } from '../models/geo-location.model';

describe('HouseService', () => {
  let service: HouseService;
  let httpTestingController: HttpTestingController;
  let id:number;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HouseService);
    httpTestingController = TestBed.inject(HttpTestingController);
    id = 10082422
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call service detail', (done:DoneFn)=>{
    service.getHouseById(id).subscribe({
      next: (resp:HouseDetail)=>{
        expect(resp).toEqual(DEFAULT_DETAIL_HOUSE);
        done();
      },
      error: done.fail
    })
    const req = httpTestingController.expectOne(environment.apiUrl+'/listings/'+id);
    req.flush(DEFAULT_DETAIL_HOUSE)

  })

  it('should get geo location', (done:DoneFn)=>{
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((...args: any[]) => {
      const position = { coords: { latitude: 0, longitude: 0 } };
      args[0](position);
    });
    service.generateCurrentPosition().subscribe({
      next: (resp:GeoLocationModel) =>{
        console.log(resp)
        expect(resp).toEqual(DEFAULT_GEO_LOCATION);
        done();
      }
    });

  });

  it('should return house list referent to actual location', (done:DoneFn)=>{
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((...args: any[]) => {
      const position = { coords: { latitude: 41.095628607058686, longitude: -8.626873272456123 } };
      args[0](position);
    });
    service.getHousesData().subscribe({
      next: (resp:HouseDetail[]) =>{
        console.log(resp)
        expect(resp).toEqual([]);
        done();
      }
    });

    const req = httpTestingController.expectOne(environment.apiUrl+'/search');
    req.flush([])

  })

});
