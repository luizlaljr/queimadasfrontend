import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./containers/home/home.component";

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {

}
