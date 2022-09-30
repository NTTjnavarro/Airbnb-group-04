import { Component, OnInit } from '@angular/core';
import { GeoLocationModel } from 'src/app/models/geoLocation.model';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  private currentPosition: GeoLocationModel = {
    position: {
      lat: 0,
      lng: 0
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.generateCurrentPosition()
  }

  generateCurrentPosition(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentPosition = {
        position:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }
    })
  }

}
