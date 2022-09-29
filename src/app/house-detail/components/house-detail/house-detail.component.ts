import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  houseId: number = 0;
  constructor(private route: ActivatedRoute, private houseService: HouseService) { }

  ngOnInit(): void {
    this.houseService.getHouseById(this.houseId).subscribe(house =>{
      
    })
  }
  private getIdRoutParam(){
    this.route.params.subscribe(params => {
      this.houseId = params['id'];

    
    })
  }
}
