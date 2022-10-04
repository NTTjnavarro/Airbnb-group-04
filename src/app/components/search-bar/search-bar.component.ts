import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public searchParam = ""

  search() {
    console.log(this.searchParam)
  }

  //http://www.mapquestapi.com/geocoding/v1/address?key=0wskXZ8RFF1noyxMvBm8JwHRm3vsTGaf&location=Washington,DC

  constructor() { }

  ngOnInit(): void {
  }

}
