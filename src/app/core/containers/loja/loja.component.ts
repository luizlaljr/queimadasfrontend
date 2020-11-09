import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  produtos = [{
    nome: 'caneca',
    imagem: 'text',
    linkVenda: ''
  },
    {
      nome: 'boné',
      imagem: 'text',
      linkVenda: ''
    },
    {
      nome: 'camisa',
      imagem: 'text',
      linkVenda: '',
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

}
