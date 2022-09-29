import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DEFAULT_DETAIL_HOUSE, HouseDetail } from 'src/app/models/house-detail';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  houseId: number = 0;
  house: HouseDetail = DEFAULT_DETAIL_HOUSE;
  constructor(private route: ActivatedRoute, private houseService: HouseService) { }

  ngOnInit(): void {
    debugger;
    this.houseId = this.route.snapshot.paramMap.get('id') ?  Number(this.route.snapshot.paramMap.get('id')) : 0;
    this.houseService.getHouseById(this.houseId).subscribe(house =>{    
      this.house = house; 
    })  
    
  
    }
   
  }
