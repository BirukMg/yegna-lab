import { Component, Input, OnInit } from '@angular/core';
import { HomeSection } from '../../models/home-section.model'

@Component({
  selector: 'app-home-body-section',
  templateUrl: './home-body-section.component.html',
  styleUrls: ['./home-body-section.component.scss'],
})
export class HomeBodySectionComponent implements OnInit {
  @Input() data: HomeSection;
  constructor() {}

  ngOnInit(): void {}
}
