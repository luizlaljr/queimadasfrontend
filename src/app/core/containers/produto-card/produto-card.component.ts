import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {
  @Input() produto: any;

  constructor() { }

  ngOnInit(): void {
  }

}
