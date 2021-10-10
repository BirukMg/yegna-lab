import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html',
  styleUrls: ['./our-client.component.scss'],
})
export class OurClientComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    dotsData: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    // animateIn: 'animate__zoomIn',
    // animateOut: 'animate__zoomOut',
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
  clientGroupOne = [
    'aastu.png',
    'aaucvma.png',
    'astu.png',
    'bonga university.png',
    'dilla university.png',
    'dire dawa university.png',
    'haramaya university.png',
  ];
  clientGroupTwo = [
    'Hawassa Teachers College.png',
    'hawassa university.png',
    'mettu university.png',
    'Unity University.png',
    'wcu.png',
    'environment.png',
    'EARC.png',
  ];
  clientGroupThree = [
    'ecae.png',
    'Habesha Breweries .png',
    'selam water.jpg',
    'kombolcha industrial park.svg',
    'Netherlands Development Organization.png',
    'save the Children.png',
    'zewditu hospital.png',
  ];

  constructor(@Inject('BASE_IMAGE_URL') public baseImageUrl: string) {}

  ngOnInit(): void {}
}
