import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {initialProducts} from '../../core/product/util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products$ = new BehaviorSubject<Product[]>(initialProducts);

  constructor() { }

  getProductById(id) {
    return this.products$.getValue().find(product => product.id === id);
  }

  getAllProducts() {
    return (<{}[]>this.products$.getValue());
  }

  insertNewProduct(product: Product) {
    const id = this.getAllProducts()[this.getAllProducts().length - 1];
    console.log(product)
     this.products$.next([new Product()]);
  }

}
