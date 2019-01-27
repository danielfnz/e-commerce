import {Component, Input} from '@angular/core';
import {Product} from '../../model/product.model';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() produto: Product;
  quantidade = 1;

  constructor(private router: Router, private cartService: CartService) { }

  openProduct() {
    this.router.navigate([`/product/${this.produto.id}`]);
  }

  addToCart() {
    this.cartService.addCarrinho(this.produto);
    this.router.navigate([`/cart`]);
  }

  alteraQuantidade(e) {
    this.produto.quantidade = e;
    this.quantidade = e;
  }

}
