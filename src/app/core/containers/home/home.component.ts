import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {

  graf: Object;

  constructor(private _homeService: HomeService) { }

  getGrafficImage(): void {
    this._homeService.getGraffic().subscribe(
      resGraffic => { this.graf = resGraffic, console.log(resGraffic) });
  }

  ngOnInit(): void {
    this.getGrafficImage();
  }

}
