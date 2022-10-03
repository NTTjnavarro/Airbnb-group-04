import { Component, OnInit } from '@angular/core';
import { HouseList } from '../models/house-detail';
import { HouseService } from '../services/house.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  houseList: HouseList=[];

  constructor(private HouseService: HouseService) { 
    this.HouseService.getHousesData().subscribe(houses => this.houseList=houses)
  }

  ngOnInit(): void {
    this.HouseService.getHousesData().subscribe(houses => this.houseList=houses)
    console.log(this.houseList)

  }

}
