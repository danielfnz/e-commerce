import { CatalogoService } from './../../shared/services/catalogo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  private idProduto: number;
  private sub: any;

  public produto;

  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idProduto = params.id;
      this.produto =  this.catalogoService.getProduto(Number(params.id));
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
