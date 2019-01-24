import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  public produtos = [];

  constructor() {
    this.produtos = [
      {idProduto:  1, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'https://organomix.vteximg.com.br/arquivos/ids/19495-130-130/abacaxi.jpg?v=635919541022530000'},
      {idProduto:  2, descricaoProduto : 'Cenoura', preco: 10, quantidade : 1, img: 'https://organomix.vteximg.com.br/arquivos/ids/15937-130-130/DSC03362.jpg?v=635713566095300000'},
      {idProduto:  3, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'https://organomix.vteximg.com.br/arquivos/ids/15937-130-130/DSC03362.jpg?v=635713566095300000'},
      {idProduto:  4, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'https://organomix.vteximg.com.br/arquivos/ids/15937-130-130/DSC03362.jpg?v=635713566095300000'},
      {idProduto:  5, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'http://placehold.it/350x150/333333'},
      {idProduto:  6, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'http://placehold.it/350x150/111111'},
      {idProduto:  7, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'http://placehold.it/350x150/333333'},
      {idProduto:  8, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'http://placehold.it/350x150/111111'},
      {idProduto:  9, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'http://placehold.it/350x150/333333'},
      {idProduto:  10, descricaoProduto : 'Abacaxi', preco: 10, quantidade : 1, img: 'http://placehold.it/350x150/666666'}
    ];
  }

  getProdutos() {
    return this.produtos;
  }

  getProduto(idProduto) {
    return this.produtos.filter(obj => obj.idProduto === idProduto)[0];
  }
}
