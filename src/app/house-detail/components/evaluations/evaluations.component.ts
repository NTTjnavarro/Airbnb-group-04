import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_DETAIL_HOUSE, DEFAULT_REVIEW_SCORES, HouseDetail, ReviewScores } from 'src/app/models/house-detail';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  @Input() reviews: HouseDetail = DEFAULT_DETAIL_HOUSE;
  // @Input() reviewScore: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.reviews);
    // console.log(this.reviewScore);
  }

}
