import { Component, Inject, Input, OnInit } from '@angular/core';
import { HomeSection } from 'src/app/models/home-section.model';

@Component({
  selector: 'app-home-body-section',
  templateUrl: './home-body-section.component.html',
  styleUrls: ['./home-body-section.component.scss'],
})
export class HomeBodySectionComponent implements OnInit {
  @Input() data: HomeSection;
  constructor(@Inject('BASE_IMAGE_URL') public baseImageUrl: string) {}

  ngOnInit(): void {}
}
