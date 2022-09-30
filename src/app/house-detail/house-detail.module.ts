import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailRoutingModule } from './house-detail-routing.module';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    HouseDetailComponent
  ],
  imports: [
    CommonModule,
    HouseDetailRoutingModule,
    ButtonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HouseDetailModule { }
