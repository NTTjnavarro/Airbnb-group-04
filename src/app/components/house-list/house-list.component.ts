import { Component, OnInit } from '@angular/core';
import { HouseDetail, HouseList } from 'src/app/models/house-detail';
import { HouseService } from 'src/app/services/house.service';


@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  public isLoading: boolean = true;
  public houseList: HouseList = [];

  constructor(
    private houseService: HouseService
  ) { }

  ngOnInit(): void {
    this.houseService.getHousesData().subscribe((houseList) => {
      this.houseList = houseList;
      this.isLoading = false;
    });
  }

}
