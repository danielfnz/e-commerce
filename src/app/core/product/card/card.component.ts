import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {iconsRef} from '../util';
import {DomSanitizer} from '@angular/platform-browser';
import {Product} from '../../../shared/model/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterContentInit {

  constructor() {

  }

  @Input() produto: Product;

  ngAfterContentInit(): void {

  }


}
