import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  // center: {
  //   lat: -18.112668,
  //   lng: -57.240200
  // };
  // zoom: 7.05;
  // mapTypeId: 'hybrid';

  latitude: number;
  longitude: number;
  zoom: number;

  constructor() { }

  ngOnInit(): void {

    this.setLocation();

  }

  private setLocation() {

    this.latitude = -18.112668;
    this.longitude = -57.240200;
    this.zoom = 4.55;

  }

}
