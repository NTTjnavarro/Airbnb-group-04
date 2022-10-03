import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HouseService } from 'src/app/services/house.service';

import { HouseDetailComponent } from './house-detail.component';
import { DEFAULT_DETAIL_HOUSE } from 'src/app/models/house-detail';
import { Router } from '@angular/router';

describe('HouseDetailComponent', () => {
  let component: HouseDetailComponent;
  let fixture: ComponentFixture<HouseDetailComponent>;
  let service:HouseService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HouseService);
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get detail house success',()=>{
    spyOn(service, 'getHouseById').and.returnValue(of(DEFAULT_DETAIL_HOUSE))
    component.ngOnInit();
    expect(component.house).toEqual(DEFAULT_DETAIL_HOUSE);

  });

  it('get detail house error',()=>{
    const navigateSpy = spyOn(router, 'navigate');
    spyOn(service, 'getHouseById').and.returnValue(throwError(() => new Error('error')))
    component.ngOnInit();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);

  });


});
