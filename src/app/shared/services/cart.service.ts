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
      this.valorTotal += Number(item.precoPromocional) * Number(item.quantidade);
    });
  }

  clear() {
    this.carrinho = [];
  }

  addCarrinho(item: Product) {
    this.carrinho.push(item);
    this.valorTotal += item.precoPromocional * item.quantidade;
    this.quantidadeTotal += Number(item.quantidade);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  removeItem(item: Product) {
    this.carrinho.splice(this.carrinho.indexOf(item) , 1);
    this.valorTotal -= item.precoPromocional * item.quantidade;
    this.quantidadeTotal -= Number(item.quantidade);
  }

  getCarrinho() {
    return this.carrinho;
  }

}
