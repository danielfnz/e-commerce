import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren, Input,
  OnInit,
  QueryList,
  TemplateRef, ViewChild
} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template #defaulttabsHeader let-tabs="tabs">
      <ul *ngIf="tabs">
        <li [ngClass]="{selected: tab.selected}"
            (click)="selectTab(tab)" *ngFor="let tab of tabs">{{tab.title}}
        </li>
      </ul>
    </ng-template>

    <ng-container *ngTemplateOutlet="defaulttabsHeader; context:tabsContext"></ng-container>

    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      font-size: 14px;
      color: #958f8f;
    }
    .selected {color: #2d8315;}
    ul {list-style: none;}
    li {
      display: inline-block;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      border: 1px solid rgba(149, 143, 143, .2);
      padding: 8px 12px;
    }
  `]
})
export class TabPanelComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit(): void {
      const selectedTab = this.tabs.find(tab => tab.selected);

      if (!selectedTab && this.tabs.first) { this.tabs.first.selected = true; }
  }

  selectTab(tab) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs
    };
  }

}
