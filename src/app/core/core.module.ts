import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from "./core-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./containers/home/home.component";
import { MapaComponent } from './containers/mapa/mapa.component';
import { AreasProtegidasComponent } from './containers/areas-protegidas/areas-protegidas.component';
import { OrientacoesComponent } from './containers/orientacoes/orientacoes.component';
import { LojaComponent } from './containers/loja/loja.component';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [HomeComponent, MapaComponent, AreasProtegidasComponent, OrientacoesComponent, LojaComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAL8R0_7IN0b52lBZJ3Pp1T0NdpBrnk1kY'
    })
  ]
})
export class CoreModule { }
