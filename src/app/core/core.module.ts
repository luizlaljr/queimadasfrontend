import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import {SharedModule} from "../shared/shared.module";
import {CoreRoutingModule} from "./core-routing.module";



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
