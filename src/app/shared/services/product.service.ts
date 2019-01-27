import { Injectable } from '@angular/core';

import { Product } from '../model/product.model';
import { initialProducts } from '../util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public produtos = [];

  constructor() {
    this.produtos = initialProducts;
  }

  getProductById(id) {
    return this.produtos.filter(obj => obj.id === id)[0];
  }

  getAllProducts() {
    return this.produtos;
  }

  insertNewProduct(product: Product) {
    const id = this.getAllProducts()[this.getAllProducts().length - 1].id;
    product.id = id + 1;
    this.produtos.push(product);
  }
}
