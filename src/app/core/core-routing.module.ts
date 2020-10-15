import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";
import {MapaComponent} from "./components/mapa/mapa.component";
import {AreasProtegidasComponent} from "./components/areas-protegidas/areas-protegidas.component";


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'areas-protegidas', component: AreasProtegidasComponent}


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
