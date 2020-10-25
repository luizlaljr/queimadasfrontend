import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-mapa-dialog',
  templateUrl: './mapa-dialog.component.html',
  styleUrls: ['./mapa-dialog.component.css']
})
export class MapaDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }

}
