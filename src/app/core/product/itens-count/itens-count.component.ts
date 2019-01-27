import {Component, OnInit, EventEmitter, Output} from '@angular/core';

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

  counter = 1;

  @Output() enviaQuantidade = new EventEmitter<number>();

  get counterValue() {
      return this.counter <= 9 ? '0' + this.counter : this.counter;
  }

  incrementCounter() {
    // noinspection TsLint
    this.counter !== 99 ? this.counter++ : null;
    this.enviaQuantidade.emit(this.counter);
  }

  decrementCounter() {
    // noinspection TsLint
    this.counter !== 1 ? this.counter-- : null;
    this.enviaQuantidade.emit(this.counter);
  }
}
