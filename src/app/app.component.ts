import { Component } from '@angular/core';
import {ProductService} from './shared/services/product.service';
import {initialProducts, STORAGE_KEY} from './core/product/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce';

  constructor() {
    if(!localStorage.getItem(STORAGE_KEY))localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts))
  }

}
