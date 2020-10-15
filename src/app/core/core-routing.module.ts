import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./containers/home/home.component";


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},


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
