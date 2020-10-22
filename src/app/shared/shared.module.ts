import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule

  ],
  exports:[
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FlexModule

  ]
})
export class SharedModule { }
