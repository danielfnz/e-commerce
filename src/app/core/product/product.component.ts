import {Component, OnDestroy, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public produtosList: Product[] = [];
  private sub: any;
  public quantidade = 1;
  public slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  @Output() add = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (Number(params.id) <= this.productService.getProductsLength()) {
        this.produto = this.productService.getProductById(Number(params.id));
      } else {
        this.router.navigate([`/`]);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToCart() {
    this.cartService.addCarrinho(this.produto);
    setTimeout(() => {
      this.router.navigate([`/cart`]);
    }, 300);
  }

  alteraQuantidade(e) {
    this.produto.quantidade = e;
    this.quantidade = e;
  }
}
