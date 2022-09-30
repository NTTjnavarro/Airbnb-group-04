import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_DETAIL_HOUSE, HouseDetail } from 'src/app/models/house-detail';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  houseId: number;
  house: HouseDetail = DEFAULT_DETAIL_HOUSE;
  isLoading:boolean;
  constructor(private ActivatedRoute: ActivatedRoute, private houseService: HouseService, private Router: Router) {
    this.isLoading = true;
    this.houseId = Number(this.ActivatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getDetailHouse(this.houseId);
    }

    getDetailHouse(id:number){
      this.houseService.getHouseById(id).subscribe({
        next: (house:HouseDetail) =>{
          this.house = house;
          this.isLoading = false;
        },
        error: () =>{
          this.Router.navigate(['/']);
        }
      })  
    }

  }
