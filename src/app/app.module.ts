import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseListComponent } from './components/house-list/house-list.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,    
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
