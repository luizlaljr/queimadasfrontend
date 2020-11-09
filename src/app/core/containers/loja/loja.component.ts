import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  produtos = [{
    nome: 'Caneca',
    imagem: 'assets/produtos/caneca.jpg',
    linkVenda: 'https://mpago.la/1k2ubbE'
  },
    {
      nome: 'Boné',
      imagem: 'assets/produtos/bone_branco.jpg',
      linkVenda: 'https://mpago.la/2gSEKrF'
    },
    {
      nome: 'Camisa Azul',
      imagem: 'assets/produtos/camisa_azul.jpg',
      linkVenda: 'https://mpago.la/2cwYqAj',
    },
    {
      nome: 'Eco Bag',
      imagem: 'assets/produtos/ecobag.jpg',
      linkVenda: 'https://mpago.la/1inXvC8',
    },
    {
      nome: 'Chaveiro',
      imagem: 'assets/produtos/chaveiro_quadrado.jpg',
      linkVenda: 'https://mpago.la/17VWsYt',
    },
    {
      nome: 'Camisa Branca',
      imagem: 'assets/produtos/camisa_branca.jpg',
      linkVenda: 'https://mpago.la/31fS7KP',
    },
    {
      nome: 'Camisa Rosa',
      imagem: 'assets/produtos/camisa_rosa.jpg',
      linkVenda: 'https://mpago.la/33CiQed',
    },
    {
      nome: 'Caneca Azul',
      imagem: 'assets/produtos/caneca_azul.jpg',
      linkVenda: 'https://mpago.la/27qjqNL'
    },]

  constructor() {
  }

  ngOnInit(): void {
  }

}

