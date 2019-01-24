import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrinho = [];
  public valorTotal = 0;

  constructor() { }

  addCarrinho(item) {
    this.carrinho.push(item);
    this.valorTotal += item.preco * item.quantidade;
  }

  getCarrinho() {
    return this.carrinho;
  }
}
