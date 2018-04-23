import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var initialize: Function;
declare var toggleCamera: Function;
declare var captureImage: Function;
declare var newAnalysis: Function;
declare var onSelectSnapshot: Function;
declare var drwaline: Function;
declare var clearCanvas: Function;
declare var exitApp: Function;

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
      y: 25
    },
    {
      x: 400,
      y: 575
    },
    {
      x: 400,
      y: 300
    }
  ];
  footMarkerPositionX = 400;
  deviationMarkerPositionX = 400;
  deviationMarkerPositionY = 300;

  constructor( private router: Router) {
    initialize();
    this.isVisibleDeviationMarker = false;
    this.isDeviationLine = false;
    this.footmarker = this.isDeviationLine ? this.DEVIATION_MARKER_WITH_LINE : this.DEVIATION_MARKER;
    for (let i = 0; i < 6; i++) {
      this.snapshots.push(this.DEFAULT_SNAPSHOTS);
    }

  }

  exitApp() {
    exitApp();
  }

  toggleDeviationMarker() {
    this.isVisibleDeviationMarker = !this.isVisibleDeviationMarker;
    if (this.isVisibleDeviationMarker) {
      drwaline(this.points);
    } else {
      clearCanvas();
    }
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

  onFootMarkerStart(event) {
    // console.log('started output:', event);
  }

  onFootMarkerStop(event) {
    // console.log('stopped output:', event);
  }

  onFootMarkerMoving(event) {
    this.points[0].x = this.footMarkerPositionX + event.x;
    this.points[1].x = this.footMarkerPositionX + event.x;
    console.log('points: ', this.points);
  }

  onFootMarkerMoveEnd(event) {
    // this.points[0].x = this.footMarkerPositionX + event.x;
    // this.points[1].x = this.footMarkerPositionX + event.x;
    console.log('end_points: ', this.points);
  }

  onDeviationMarkerStart(event) {
    // console.log('started output:', event);
  }

  onDeviationMarkerStop(event) {
    // console.log('stopped output:', event);
  }

  onDeviationMarkerMoving(event) {
    this.points[2].x = this.deviationMarkerPositionX + event.x;
    this.points[2].y = this.deviationMarkerPositionY + event.y;
    console.log('dpoints: ', this.points);
    drwaline(this.points);
  }

  onDeviationMarkerMoveEnd(event) {
    // this.points[2].x = this.deviationMarkerPositionX + event.x;
    // this.points[2].y = this.deviationMarkerPositionY + event.y;
    console.log('dend_points: ', this.points);
  }

  ngOnInit() {
  }

}
