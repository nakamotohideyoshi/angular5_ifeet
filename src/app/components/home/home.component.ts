import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var initialize: Function;
declare var toggleCamera: Function;
declare var captureImage: Function;
declare var newAnalysis: Function;
declare var onSelectSnapshot: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isVisibleDeviationMarker: Boolean = false;
  isDeviationLine: Boolean = false;
  footmarker: String;
  DEVIATION_MARKER_WITH_LINE: String = 'assets/foot-marker2.png';
  DEVIATION_MARKER: String = 'assets/foot-marker1.png';
  isCameraProcessing: Boolean = false;
  DEFAULT_SNAPSHOTS: String = 'assets/foot-background.png';
  snapshots: any = [];
  defaultoffsetx: any = 360;
  defaultoffsety: any = 260;
  offsetx: any = 0;
  offsety: any = 0;
  screenx: any = 0;
  screeny: any = 0;
  draggable = true;
  inBounds = true;
  isSelected: Boolean = false;
  edge = {
    top: true,
    bottome: true,
    left: true,
    right: true
  };
  deviation_marker = {
    x: 360,
    y: 260
  };
  foot_marker = {
    x: 390,
    y: 0
  };

  points = [
    {
      x: 400,
      y: 20
    },
    {
      x: 400,
      y: 580
    },
    {
      x: 400,
      y: 300
    }
  ];

  constructor( private router: Router) {
    initialize();
    this.isVisibleDeviationMarker = false;
    this.isDeviationLine = false;
    this.footmarker = this.isDeviationLine ? this.DEVIATION_MARKER_WITH_LINE : this.DEVIATION_MARKER;
    for (let i = 0; i < 6; i++) {
      this.snapshots.push(this.DEFAULT_SNAPSHOTS);
    }

  }

  toggleDeviationMarker() {
    this.isVisibleDeviationMarker = !this.isVisibleDeviationMarker;
  }

  toggleFootMarker() {
    this.isDeviationLine = !this.isDeviationLine;
    this.footmarker = this.isDeviationLine ? this.DEVIATION_MARKER_WITH_LINE : this.DEVIATION_MARKER;
  }

  toggleCamera() {
    toggleCamera();
  }

  captureImage() {
    captureImage();
  }

  newAnalysis() {
    newAnalysis();
  }

  onSelectSnapshot(index) {
    onSelectSnapshot(index);
  }

  active(event) {
    console.log(event);
  }

  setDeviationMarker() {
    const styles = {
      'left': this.deviation_marker.x + 'px',
      'top': this.deviation_marker.y + 'px'
    };
    return styles;
  }

  setFootMarker() {
    const styles = {
      'left': this.foot_marker.x + 'px',
      'top': this.foot_marker.y + 'px'
    };
    return styles;
  }

  checkEdge(event) {
    this.edge = event;
  }

  ngOnInit() {
  }

}
