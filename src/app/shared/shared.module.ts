import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { PricePipe } from './pipes/price.pipe';



@NgModule({
  declarations: [
    SpinnerComponent,
    PricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    PricePipe
  ]
})
export class SharedModule { }
