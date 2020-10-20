import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {MapaComponent} from "./containers/mapa/mapa.component";
import {AreasProtegidasComponent} from "./containers/areas-protegidas/areas-protegidas.component";
import {OrientacoesComponent} from "./containers/orientacoes/orientacoes.component";
import {LojaComponent} from "./containers/loja/loja.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'areas-protegidas', component: AreasProtegidasComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'orientacoes', component: OrientacoesComponent},
  {path: 'loja', component: LojaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CoreRoutingModule { }
