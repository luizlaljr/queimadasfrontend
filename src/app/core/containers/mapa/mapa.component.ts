import { Component, OnInit } from '@angular/core';
import { MapaService } from './mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers: [MapaService],
})
export class MapaComponent implements OnInit {

  latitude: Number;
  longitude: Number;
  zoom: Number;
  mapTypeId: String;
  geoJsonObject: Object;

  constructor(private _mapaService: MapaService) { }

  getGeoJSON(): void {
    this._mapaService.getGeoJson()
      .subscribe(resGeoJsonData => this.geoJsonObject = resGeoJsonData);
  }

  ngOnInit(): void {

    this.setLocation();
    
    this.getGeoJSON();

  }

  private setLocation() {

    this.latitude = -14.112668;
    this.longitude = -57.240200;
    this.zoom = 4.55;
    this.mapTypeId = 'hybrid';
  }

  styleFunc(feature) {
    return {
      icon: 'assets/img/fire32.png',
      visible: 'true',
    };
  }

  onClick(clickEvent: any): void {

    console.log(clickEvent.feature.getProperty("municipio"));
    console.log(clickEvent.feature.getProperty("bioma"));
}

}
