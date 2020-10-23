import { Component, OnInit } from '@angular/core';
import { MapaService } from './mapa.service';
import { AgmMap, AgmInfoWindow } from '@agm/core';

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

  //   "properties": {
  //     "id": "d5b3a7b8-2034-3651-a082-aabc855931cb",
  //     "longitude": -38.326,
  //     "latitude": -7.34,
  //     "data_hora_gmt": "2020-10-11T15:35:00Z",
  //     "satelite": "AQUA_M-T",
  //     "municipio": "DIAMANTE",
  //     "estado": "PARAÍBA",
  //     "pais": "Brasil",
  //     "municipio_id": 2505600,
  //     "estado_id": 25,
  //     "pais_id": 33,
  //     "numero_dias_sem_chuva": 82,
  //     "precipitacao": 0,
  //     "risco_fogo": 1,
  //     "bioma": "Caatinga"
  // }
}

}
