import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  produtosList;

  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor(
    private cartService: CartService,
    private produtosService: ProductService
    ) { }

  ngOnInit() {
    this.produtosList = this.produtosService.getAllProducts();
  }


  addCarrinho(item) {
    this.cartService.addCarrinho(item);
  }

}
