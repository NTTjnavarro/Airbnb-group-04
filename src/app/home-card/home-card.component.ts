import { Component, OnInit } from '@angular/core';
import { HouseList } from '../models/house-detail';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  houseList: HouseList[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
