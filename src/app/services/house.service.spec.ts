import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_DETAIL_HOUSE, HouseDetail } from '../models/house-detail';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HouseService } from './house.service';
import { DEFAULT_GEO_LOCATION, GeoLocationModel } from '../models/geoLocation.model';

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

  it('get house list', (done:DoneFn)=>{
    service.getHousesList(DEFAULT_GEO_LOCATION).subscribe({
      next: (resp:GeoLocationModel) =>{
        expect(resp).toEqual(DEFAULT_GEO_LOCATION);
        done();
      }
    });

    const req = httpTestingController.expectOne(environment.apiUrl+'/search');
    req.flush(DEFAULT_GEO_LOCATION);

  });

});
