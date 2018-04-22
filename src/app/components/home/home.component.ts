import { Component, OnInit } from '@angular/core';
declare var initialize: Function;
declare var toggleCamera: Function;
declare var captureImage: Function;

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
  snapshotsIndex: any = 0;
  DEFAULT_SNAPSHOTS: String = 'assets/foot-background.png';
  snapshots: any = [];

  constructor() {
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
    if (this.snapshotsIndex < 6) {
      if (captureImage(this.snapshotsIndex)) {
        this.snapshots[this.snapshotsIndex] = 'assets/snapshots/' + this.snapshotsIndex + '.png';
        this.snapshotsIndex++;
      }
    }
  }

  ngOnInit() {
  }

}
