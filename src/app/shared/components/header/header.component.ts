import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public carrinho = [];
  public quantidadeTotal = 0;
  public valorTotal = 0;

  constructor(public cartService: CartService) {
   }

  ngOnInit() {
    this.cartService.getCarrinho().subscribe(carrinhoList => {
      this.carrinho = carrinhoList;
      this.quantidadeTotal = this.cartService.quantidadeTotal;
      this.valorTotal = this.cartService.valorTotal;
    });
  }

}
