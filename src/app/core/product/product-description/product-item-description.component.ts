import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {iconsRef} from '../../../shared/util';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product-item-description',
  template: `
    <img [src]="imagem" width="20" height="20">
    <span *ngIf="label">{{descricao}}</span>
  `,
  styles: [`
  span {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: #958f8f;
    margin: 0 10px;
    text-transform: uppercase;
  }
    
  `]
})
export class ProductItemDescriptionComponent implements AfterContentInit {

  constructor(private domSanitizer: DomSanitizer) { }

  imagem;
  descricao;
  @Input() icon;
  @Input() label = false;

  ngAfterContentInit(): void {
    this.imagem = this.domSanitizer.bypassSecurityTrustUrl(iconsRef[this.icon].image);
    this.descricao = iconsRef[this.icon].title
  }


}
