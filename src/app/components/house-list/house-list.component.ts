import { Component, OnInit } from '@angular/core';
import { DEFAULT_GEO_LOCATION, GeoLocationModel, getCurrentPosition } from 'src/app/models/geoLocation.model';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  private currentPosition: GeoLocationModel = DEFAULT_GEO_LOCATION;
  isLoading:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.generateCurrentPosition()
  }

  generateCurrentPosition():void{
    navigator.geolocation.getCurrentPosition((position: getCurrentPosition) => {
      this.currentPosition = {
        position:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }
      this.isLoading = false;
    })
  }

}
