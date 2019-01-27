import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public carrinhoList = [];

  constructor(public CartService: CartService) { }

  ngOnInit() {
    this.CartService.getCarrinho().subscribe(carrinho => {
      this.carrinhoList = carrinho;
    });
  }

  clear() {
    this.CartService.limparCarrinho();
  }

  removeItem(item: any) {
    this.CartService.removeItem(item);
  }

  addCarrinho(item: any) {
    this.CartService.addCarrinho(item);
  }

  alteraQuantidade(item, quantidade) {
    item.quantidade = quantidade;
   this.CartService.alterarQuantidade(item);
  }
}
