import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'core'},
  {path: 'core', loadChildren: () => import('./core/core.module').then(module => module.CoreModule)}
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
