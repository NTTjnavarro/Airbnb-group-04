import { NgModule } from '@angular/core';


import { HouseDetailRoutingModule } from './house-detail-routing.module';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HouseDetailComponent
  ],
  imports: [
    CommonModule,
    HouseDetailRoutingModule
  ]
})
export class HouseDetailModule { }
