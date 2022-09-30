import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailRoutingModule } from './house-detail-routing.module';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { MapComponent } from './components/map/map.component';
import { HostComponent } from './components/host/host.component';

import {ButtonModule} from 'primeng/button';

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
    HouseDetailRoutingModule,
    ButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HouseDetailModule { }
