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
        'We provide general laboratory equipment, as well as, full installation and maintenance to research labs of all sizes',
      tags: ['Hospitals', 'Hospitals'],
      bgUrl: '#61EBCA',
      imgUrl: 'lab.png',
      reverse: false,
    },
    {
      title: 'For Medical Faculties',
      description:
        'we provide general laboratory equipment for medical facilities, as well as, installation and setup ',
      tags: ['Hospitals', 'Hospitals'],
      bgUrl: '#FFCD78',
      imgUrl: 'hospital.png',
      reverse: true,
    },
    {
      title: 'For Educational Institute',
      description:
        'we provide chemicals, Chemistry equipment, and physics products, as well as, installation and setup for different educational institutes  ',
      tags: ['Hospitals', 'Hospitals'],
      bgUrl: '#3691FA',
      imgUrl: 'school-2.png',
      reverse: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
