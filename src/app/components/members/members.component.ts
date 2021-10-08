import { Component, Inject, OnInit } from '@angular/core';
import { Member } from 'src/app/models/members.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    {
      name: 'Amsalu Getachew',
      role: 'CEO',
      imgUrl: 'Amsalu Getachew.jpg',
    },
    {
      name: 'Amare Getachew',
      role: 'Marketing manager',
      imgUrl: 'Amare Getachew.jpg',
    },
    {
      name: 'Senyet getu',
      role: 'Senior Accountant',
      imgUrl: 'Senyet getu.jpg',
    },
    {
      name: 'Mohammed Sied',
      role: 'Head of Finance and Administration',
      imgUrl: 'Mohammed Sied.jpg',
    },
  ];

  constructor(@Inject('BASE_IMAGE_URL') public baseImageUrl: string) {}

  ngOnInit(): void {}
}
