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
    });
  }
  clear(){
    this.carrinho = []
  }
  /*
  tem que tratar itens repetidos
  */
  addCarrinho(item: Product) {
    this.carrinho.push(item);
    this.valorTotal += item.preco * item.quantidade;
    this.quantidadeTotal += Number(item.quantidade);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  removeItem(item:Product){
    this.carrinho.splice(this.carrinho.indexOf(item) ,1)
  }

  getCarrinho() {
    return this.carrinho;
  }

// codigo para  tratar itens repetidos
//   addItem(item:MenuItem){
//     let foundItem = this.items.find((mItem) => mItem.menuItem.id  === item.id)
//     if(foundItem){
//         foundItem.quantity = foundItem.quantity + 1
//     } else {
//         this.items.push(new CartItem(item))
//     }
// }

}
