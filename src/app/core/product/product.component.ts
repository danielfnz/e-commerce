import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/model/product.model';
import {CartService} from '../../shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  public produto;
  produtosList: Product[] = [];
  private sub: any;
  quantidade = 1;
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.produto = this.productService.getProductById(Number(params.id));
      this.produtosList = this.productService.getAllProducts();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToCart() {
    this.cartService.addCarrinho(this.produto);
  }

  alteraQuantidade(e) {
    this.produto.quantidade = e;
    this.quantidade = e;
  }
}
