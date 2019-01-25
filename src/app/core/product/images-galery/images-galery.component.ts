import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-images-galery',
  template: `
    <div class="imagem-lista" *ngIf="imagens">
      <ng-container *ngFor="let imagem of imagens; let i = index">
        <img [src]="imagem" width="80" height="80" (click)="selectImage(i)">
      </ng-container>
    </div>
    <div class="imagem-principal">
      <img [src]="bigImage" width="430" height="430">
    </div>
  `,
  styles: [`
    :host {
      display: flex;
    }

    .imagem-lista {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      overflow: hidden;
    }

    .imagem-lista img {
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid rgba(149, 143, 143, .2);
    }

    .imagem-principal {
      overflow: hidden;
    }

    .imagem-principal img {
      border: 1px solid rgba(149, 143, 143, .2);
    }

  `]
})
export class ImagesGaleryComponent {

  @Input() imagens: string[];

  imageSelected;

  get bigImage() {
    if (this.imageSelected) {
      return this.imagens[this.imageSelected];
    } else if (this.imagens) {
      return this.imagens[0];
    }
  }

  selectImage(index) {
    this.imageSelected = index;
  }

}
