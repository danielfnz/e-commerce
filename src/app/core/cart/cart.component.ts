import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService) { }

  ngOnInit() {
  }

  clear(){
    this.CartService.carrinho;
  }

  carrinho(): any[] { 
    return this.CartService.carrinho;
  }

  removeItem(item: any){
    this.CartService.removeItem(item)
  }

  addCarrinho(item: any){
    this.CartService.addCarrinho(item)
  }
}
