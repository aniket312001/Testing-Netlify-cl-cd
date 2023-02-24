import { MapService } from './../map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-google-map',
  templateUrl: './display-google-map.component.html',
  styleUrls: ['./display-google-map.component.css']
})
export class DisplayGoogleMapComponent implements OnInit {


  constructor(private map : MapService) {

  }


  onbtn(){

  }

  ngOnInit(): void {
    this.map.getmapdata("pune india").subscribe(data=>{
      console.log(data)
    })
  }

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 18.5204;
  lng: number = 73.8567;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markers = [
      {
          lat: 18.5204,
          lng: 73.8567,
          label: "A",
          draggable: true
      },
      {
          lat: 51.373858,
          lng: 7.215982,
          label: "B",
          draggable: false
      },
      {
          lat: 51.723858,
          lng: 7.895982,
          label: "C",
          draggable: true
      }
  ]


}
