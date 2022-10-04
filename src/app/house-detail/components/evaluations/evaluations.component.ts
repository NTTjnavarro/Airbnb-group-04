import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_DETAIL_HOUSE, DEFAULT_REVIEW, DEFAULT_REVIEW_SCORES, HouseDetail, Review, ReviewScores } from 'src/app/models/house-detail';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  @Input() reviewScore: ReviewScores = DEFAULT_REVIEW_SCORES;
  @Input() reviews: Review[] = [];
  // @Input() reviewScore: any;
  constructor() {
    console.log('REVIEWS SCORE', this.reviewScore);
   }

   ngOnInit() {
    console.log('REVIEWS SCORE', this.reviewScore);
   }

}
