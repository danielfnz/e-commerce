import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buttom',
  template: `
    <a>
      {{label}}
    </a>
  `,
  styles: [`
    a {
      color: #FFF!important;
      font-family: "Work Sans", sans-serif;
      text-transform: uppercase;
      font-size: 20px;
      line-height: 35px;
      font-weight: 700;
      background-color: #2d8315;
      display: inline-block;
      width: 100%;
      text-align: center;
      cursor: pointer;
    }
  `]
})
export class ButtomComponent {

  @Input() label = '';

}
