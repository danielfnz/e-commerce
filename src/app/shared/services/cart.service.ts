import { CartItem } from '../model/product-item.model';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public carrinho = [];
  // public valorTotal = 0;
  // public quantidadeTotal = 0;

  // constructor() {
  //   this.carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];
  //   this.carrinho.forEach(item => {
  //     this.quantidadeTotal += Number(item.quantidade);
  //   });
  // }

  carrinho: CartItem[] = []
  clear(){
    this.carrinho = []
  }
  /*
  tem que tratar itens repetidos
  */
  // addCarrinho(item: Product) {
  //   this.carrinho.push(item);
  //   this.valorTotal += item.preco * item.quantidade;
  //   this.quantidadeTotal += Number(item.quantidade);
  //   localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  // }

  /*
  Ajuste para tratar itens repetidos e 
  separacao entre add produto e remover 
  item do carrinho.
  */
  addCarrinho(item:Product){
    let foundItem = this.carrinho.find((mItem) => mItem.product.id  === item.id)
    if(foundItem){
        foundItem.quantity = foundItem.quantity + 1
    } else {
        this.carrinho.push(new CartItem(item))
    }
}

//
  // removeItem(item:Product){
  //   this.carrinho.splice(this.carrinho.indexOf(item) ,1)
  // }
  removeItem(item:CartItem){
    this.carrinho.splice(this.carrinho.indexOf(item) ,1)
  }

  getCarrinho() {
    return this.carrinho;
  }
}
