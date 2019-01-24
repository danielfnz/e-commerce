import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  produtos;

  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  constructor(
    private catalogoService: CatalogoService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.produtos = this.catalogoService.getProdutos();
  }


  addCarrinho(item) {
    this.cartService.addCarrinho(item);
  }

}
