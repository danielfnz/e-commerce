import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 12000, noPause: true, showIndicators: true } }
  ]
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
