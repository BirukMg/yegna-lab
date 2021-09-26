import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    dotsData: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    animateIn: 'animate__zoomIn',
    animateOut: 'animate__zoomOut',
  };

  constructor() {}

  ngOnInit(): void {}
}
