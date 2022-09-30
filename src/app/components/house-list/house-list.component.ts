import { Component, OnInit } from '@angular/core';
import { HouseDetail } from 'src/app/models/house-detail';
import { HouseService } from 'src/app/services/house.service';


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  private houseList: HouseDetail[] = []

  constructor(
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.houseService.getHousesData().subscribe(p => console.log(p))
  }

}
