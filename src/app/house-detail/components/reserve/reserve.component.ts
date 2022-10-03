import { UtilsService } from './../../../shared/services/utils.service';
import { Component, Input } from '@angular/core';
import { HouseDetail, DEFAULT_DETAIL_HOUSE } from 'src/app/models/house-detail';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
})
export class ReserveComponent {
  @Input() data: HouseDetail = DEFAULT_DETAIL_HOUSE;
  now: string;

  constructor(private UtilsService: UtilsService) {
    this.now = this.getDate();
  }

  private getDate() {
    return this.UtilsService.getDate();
  }
}
