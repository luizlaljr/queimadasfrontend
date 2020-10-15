import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {SharedModule} from "../shared/shared.module";
import { MapaComponent } from './components/mapa/mapa.component';
import { AreasProtegidasComponent } from './components/areas-protegidas/areas-protegidas.component';



@NgModule({
  declarations: [MapaComponent, AreasProtegidasComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
