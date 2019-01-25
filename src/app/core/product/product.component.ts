import {CatalogoService} from '../../shared/services/catalogo.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  public produto;
  produtosList: Product[] = [];
  private sub: any;

  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService,
    private productService: ProductService) {
    this.productService.getProductById(1);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.produto = this.productService.getProductById(Number(params.id));
      this.produtosList = this.productService.getAllProducts().filter(p => p['id'] !== this.produto.id);
      console.log(this.produtosList)
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
