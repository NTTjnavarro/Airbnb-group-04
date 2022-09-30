import { NgModule } from '@angular/core';


import { HouseDetailRoutingModule } from './house-detail-routing.module';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { CommonModule } from '@angular/common';
import { ReserveComponent } from './components/reserve/reserve.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { MapComponent } from './components/map/map.component';
import { HostComponent } from './components/host/host.component';


@NgModule({
  declarations: [
    HouseDetailComponent,
    ReserveComponent,
    EvaluationsComponent,
    MapComponent,
    HostComponent
  ],
  imports: [
    CommonModule,
    HouseDetailRoutingModule
  ]
})
export class HouseDetailModule { }
