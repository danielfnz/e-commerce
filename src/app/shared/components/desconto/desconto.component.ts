import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-desconto',
  template: `
    <div [ngClass]="containerClasses">
      <span [ngClass]="spanClasses">{{valorTotal | virgula}}%</span>
      <span [ngClass]="spanClasses">OFF</span>
    </div>
  `,
  styleUrls: ['./desconto.component.scss']
})
export class DescontoComponent {

  @Input() valor;
  @Input() valorComDesconto;
  @Input() tamanho = 'big';

  get valorTotal() {
    return (this.valor - this.valorComDesconto).toFixed(2);
  }

  span = {
    big: {
      'span-big': true
    },
    small: {
      'span-small': true
    }
  };

  container = {
    big: {
      'container-big': true,
      'container': true
    },
    small: {
      'container-small': true,
      'container': true
    }
  };

  get spanClasses() {
    return this.span[this.tamanho];
  }

  get containerClasses() {
    return this.container[this.tamanho];
  }
}
