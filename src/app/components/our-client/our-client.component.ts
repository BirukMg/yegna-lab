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
    'https://res.cloudinary.com/yegna-images/image/upload/v1634234204/aastu_vcmsom.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634234136/aaucvma_i2pnpt.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634234028/astu_qbhhzw.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233918/bonga_university_goqnqy.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233868/dilla_university_iguwvs.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233833/dire_dawa_university_yzmf6s.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233808/haramaya_university_ydplje.png',
  ];
  clientGroupTwo = [
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233792/Hawassa_Teachers_College_cqbn8m.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233773/hawassa_university_kregue.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233636/mettu_university_xcgn6p.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233515/Unity_University_qosdpq.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233524/wcu_srvpjz.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233797/environment_rs4ktz.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233815/EARC_lxtbrk.png',
  ];
  clientGroupThree = [
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233823/ecae_utjkbr.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233823/Habesha_Breweries_xpdkbh.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233531/selam_water_h99d4r.jpg',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233644/kombolcha_industrial_park_otq9i0.svg',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233534/Netherlands_Development_Organization_d55p3t.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233546/save_the_Children_lt4jjp.png',
    'https://res.cloudinary.com/yegna-images/image/upload/v1634233521/zewditu_hospital_kwnri2.png',
  ];

  constructor(@Inject('BASE_IMAGE_URL') public baseImageUrl: string) {}

  ngOnInit(): void {}
}
