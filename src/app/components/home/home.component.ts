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
declare var toggleDeviationMarker: Function;
declare var toggleFootMarker: Function;
declare var setMarkerPosition: Function;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor( private router: Router) {
    initialize();
    for (let i = 0; i < 6; i++) {
      this.snapshots.push(this.DEFAULT_SNAPSHOTS);
    }

  }

  exitApp() {
    exitApp();
  }

  toggleDeviationMarker() {
    toggleDeviationMarker();
  }

  toggleFootMarker() {
    toggleFootMarker();
  }

  setMarkerPosition(event) {
    setMarkerPosition(event.layerX, event.layerY);
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

  checkEdge(event) {
    this.edge = event;
  }

  onFootMarkerStart(event) {
    // console.log('started output:', event);
  }

  onFootMarkerStop(event) {
    // console.log('stopped output:', event);
  }

  onFootMarkerMoveEnd(event) {
    // this.points[0].x = this.footMarkerPositionX + event.x;
    // this.points[1].x = this.footMarkerPositionX + event.x;
    console.log('end_points: ', event);
  }

  onDeviationMarkerStart(event) {
    // console.log('started output:', event);
  }

  onDeviationMarkerStop(event) {
    // console.log('stopped output:', event);
  }

  onDeviationMarkerMoving(event) {
    console.log('dpoints: ', event);
  }

  onDeviationMarkerMoveEnd(event) {
    console.log('dend_points: ', event);
  }

  ngOnInit() {
  }

}
