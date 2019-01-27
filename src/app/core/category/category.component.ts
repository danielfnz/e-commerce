import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  private sub: any;
  public produtosList;
  public categoria;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.produtosList = this.productService.getProductsByCategoria(params.categoria);
      this.categoria = params.categoria;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
