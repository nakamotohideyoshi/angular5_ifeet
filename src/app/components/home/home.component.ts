import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isVisibleDeviationMarker: Boolean;
  constructor() {
    this.isVisibleDeviationMarker = false;
  }

  toggleDeviationMarker() {
    this.isVisibleDeviationMarker = !this.isVisibleDeviationMarker;
  }

  ngOnInit() {
  }

}
