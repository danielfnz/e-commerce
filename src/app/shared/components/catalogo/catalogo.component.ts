import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements AfterContentInit {

  produtosList;
  @Input() descricao;
  @Input() categoria;

  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor(
    private cartService: CartService,
    private produtosService: ProductService
    ) { }

  ngAfterContentInit(): void {
    if (this.categoria) { this.produtosList = this.produtosService.getProductsByCategoria(this.categoria); }
    else { this.produtosList = this.produtosService.getAllProducts(); }
  }

  addCarrinho(item) {
    this.cartService.addCarrinho(item);
  }

}
