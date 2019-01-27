import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-itens-count',
  template: `
      <div class="plus" (click)="incrementCounter()">+</div>
      <div class="minus" (click)="decrementCounter()">-</div>
      <div class="count">{{counterValue}}</div>
  `,
  styles: [`
    :host {
    font-family: "Work Sans", sans-serif;
    font-size: 18px;
    line-height: 40px;
    font-weight: 700;
    color: #2d8315;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 15px 40px;
    grid-template-rows: 15px 15px;
    grid-template-areas: "minus count" "plus count";
  }

  .plus {
    grid-area: minus;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .minus {
    grid-area: plus;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #EBEBEB;
    cursor: pointer;
  }

  .count {
    grid-area: count;
    background-color: #EBEBEB;
    display: flex;
    align-items: center;
    justify-content: center;
  }`]
})
export class ItensCountComponent {

  @Input() quantidade = 1;

  @Output() enviaQuantidade = new EventEmitter<number>();

  get counterValue() {
      return this.quantidade <= 9 ? '0' + this.quantidade : this.quantidade;
  }

  incrementCounter() {
    // noinspection TsLint
    this.quantidade !== 99 ? this.quantidade++ : 0;
    this.enviaQuantidade.emit(this.quantidade);
  }

  decrementCounter() {
    // noinspection TsLint
    this.quantidade !== 0 ? this.quantidade-- : 0;
    this.enviaQuantidade.emit(this.quantidade);
  }
}
