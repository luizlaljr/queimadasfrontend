import { Component, OnInit } from '@angular/core';
import { MapaService } from './mapa.service';
import {MatDialog} from "@angular/material/dialog";
import {MapaDialogComponent} from "../mapa-dialog/mapa-dialog.component";

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

  constructor(private _mapaService: MapaService,
              public dialog: MatDialog) { }

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

    const dadosDoMapa = {
      estado: clickEvent.feature.getProperty("estado"),
      municipio: clickEvent.feature.getProperty("municipio"),
      bioma: clickEvent.feature.getProperty("bioma"),
      diasSemChuva: clickEvent.feature.getProperty("numero_dias_sem_chuva") == null ? " Não informado" : clickEvent.feature.getProperty("numero_dias_sem_chuva"),
      precipitacao: clickEvent.feature.getProperty("precipitacao") == null ? " Não informado" :
      clickEvent.feature.getProperty('precipitacao') + " mm",
      fogo: clickEvent.feature.getProperty("risco_fogo") == null ? " Não informado" :
      this.insertFire(
          parseFloat(clickEvent.feature.getProperty('risco_fogo'))),
    }
    this.openDialog(dadosDoMapa);

}

insertFire(risco): String {
  let image = '';
  if (risco > 0.9) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>'
  } else if (risco > 0.8) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/2dR0xYM/fire01.png" id = "fire" ></img>'
  } else if (risco > 0.7) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0.6) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/2dR0xYM/fire01.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0.5) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0.4) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/2dR0xYM/fire01.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0.3) {
      '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
      '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
      '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
      '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0.2) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/2dR0xYM/fire01.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0.1) {
      image = '<img src = "https://i.ibb.co/kJf9MkY/fire10.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else if (risco > 0) {
      image = '<img src = "https://i.ibb.co/2dR0xYM/fire01.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  } else {
      image = '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>' +
          '<img src = "https://i.ibb.co/dfHxCn7/fire00.png" id = "fire" ></img>'
  }
  return image;
}

openDialog(dadosDoMapa: any): void{
    this.dialog.open(MapaDialogComponent, {
      width: '450px',
      height: '300px',
      data: dadosDoMapa
    })
}

}
