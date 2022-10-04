import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEFAULT_DETAIL_HOUSE, DEFAULT_REVIEW_SCORES, HouseDetail, ReviewScores } from 'src/app/models/house-detail';
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
  review: ReviewScores = DEFAULT_REVIEW_SCORES;
  constructor(private ActivatedRoute: ActivatedRoute, private houseService: HouseService, private Router: Router) {
    this.isLoading = true;
    this.houseId = Number(this.ActivatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getDetailHouse(this.houseId);
    }

    private getDetailHouse(id:number){
      this.houseService.getHouseById(id).subscribe({
        next: (house:HouseDetail) =>{
          this.house = house;
          // this.review = house.review_scores;
          this.isLoading = false;
          console.log('HOUSE', this.house);
          console.log('REVIEW', this.review);
        },
        error: () =>{
          this.Router.navigate(['/']);
        }
      })  
    }

  }
