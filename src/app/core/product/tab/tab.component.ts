import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
    <div class="tab" *ngIf="selected">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  .tab {
    padding: 30px;
    border: 1px solid rgba(149, 143, 143, .2);
  }
    /deep/ .product-description span {
      font-size: 14px;
      line-height: 18px;
      font-weight: 700;
      display: inline-block;
      margin: 10px 0 20px 0;
    }

  /deep/ .product-description p {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
  }
  `]
})
export class TabComponent {

  @Input() title: string;

  @Input() selected = false;

}
