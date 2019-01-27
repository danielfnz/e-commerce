import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrinho = [];
  public carrinhoObs = new BehaviorSubject<any>(this.carrinho);
  public valorTotal = 0;
  public quantidadeTotal = 0;

  constructor() {
    this.carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : []
    this.carrinhoObs.next(this.carrinho);
    this.carrinhoObs.asObservable().subscribe(carrinho => {
      this.valorTotal = 0;
      this.quantidadeTotal = 0;
      carrinho.forEach(item => {
        this.quantidadeTotal += Number(item.quantidade);
        this.valorTotal += item.preco * item.quantidade;
      });
    });
  }

  clear() {
    this.limparCarrinho();
  }

  addCarrinho(item: Product) {
    this.carrinho.push(item);
    this.valorTotal += item.preco * item.quantidade;
    this.quantidadeTotal += Number(item.quantidade);
    this.carrinhoObs.next(this.carrinho);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  removeItem(item: Product) {
    this.carrinho.splice(this.carrinho.indexOf(item) ,1)
    this.valorTotal -= item.preco - item.quantidade;
    this.quantidadeTotal -= Number(item.quantidade);
    this.carrinhoObs.next(this.carrinho);
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  getCarrinho() {
    return this.carrinhoObs.asObservable();
  }

  alterarQuantidade(item) {
    const index = this.carrinho.indexOf(item);
    if (item.quantidade === 0) {
      this.removeItem(item);
    } else {
      this.carrinho[index].quantidade = item.quantidade;
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
      this.carrinhoObs.next(this.carrinho);
    }
  }

  limparCarrinho() {
    this.carrinho = [];
    this.valorTotal = 0;
    this.quantidadeTotal = 0;
    this.carrinhoObs.next(this.carrinho);
    localStorage.setItem('carrinho', "");
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
