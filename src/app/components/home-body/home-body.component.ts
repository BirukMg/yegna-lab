import { Component, OnInit } from '@angular/core';
import { HomeSection } from 'src/app/models/home-section.model';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss'],
})
export class HomeBodyComponent implements OnInit {
  homeSectionData: HomeSection[] = [
    {
      title: 'For Research Labs',
      description:
        'Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.',
      tags: ['Hospitals', 'Hospitals'],
      bgUrl: '#61EBCA',
      imgUrl: 'lab.png',
      reverse: false,
    },
    {
      title: 'For Medical Faculties',
      description:
        'Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.',
      tags: ['Hospitals', 'Hospitals'],
      bgUrl: '#FFCD78',
      imgUrl: 'hospital.png',
      reverse: true,
    },
    {
      title: 'For Educational Institute',
      description:
        'Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.',
      tags: ['Hospitals', 'Hospitals'],
      bgUrl: '#3691FA',
      imgUrl: 'school-2.png',
      reverse: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
