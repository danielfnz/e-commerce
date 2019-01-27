import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {initialProducts, STORAGE_KEY} from '../../core/product/util';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProductById(id) {
    return this.getAllProducts().find(product => product.id === id);
  }

  getAllProducts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  insertNewProduct(product: Product) {
    const id = this.getAllProducts()[this.getAllProducts().length - 1].id;
    product.id = id + 1;
     localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.getAllProducts(), product]));
  }

}
