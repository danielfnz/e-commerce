import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public carrinho;

  constructor(public cartService: CartService) {
    this.carrinho = this.cartService.getCarrinho();
   }

  ngOnInit() {
  }

}
