import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrinho = [];
  public valorTotal = 0;
  public quantidadeTotal = 0;

  constructor() {
    this.carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
    this.carrinho.forEach(item => {
      this.quantidadeTotal += Number(item.quantidade);
      this.valorTotal += Number(item.preco) * Number(item.quantidade);
    });
  }

  addCarrinho(item: Product) {
    this.carrinho.push(item);
    this.valorTotal += item.preco * item.quantidade;
    this.quantidadeTotal += Number(item.quantidade);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  getCarrinho() {
    return this.carrinho;
  }
}
