import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HouseDetailModule } from './house-detail/house-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HouseDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
