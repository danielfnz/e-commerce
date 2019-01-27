import {Component, Input} from '@angular/core';
import {Product} from '../../../shared/model/product.model';
import {Router} from '@angular/router';
import {CartService} from '../../../shared/services/cart.service';

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
  }

  alteraQuantidade(e) {
    this.quantidade = e;
  }

}
