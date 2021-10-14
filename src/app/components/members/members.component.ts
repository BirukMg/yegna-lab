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
      imgUrl:
        'https://res.cloudinary.com/yegna-images/image/upload/v1634235332/Amsalu_Getachew_ij22qa.jpg',
    },
    {
      name: 'Amare Getachew',
      role: 'Marketing manager',
      imgUrl:
        'https://res.cloudinary.com/yegna-images/image/upload/v1634236611/Amare_Getachew_admfoi.jpg',
    },
    {
      name: 'Senyet getu',
      role: 'Senior Accountant',
      imgUrl:
        'https://res.cloudinary.com/yegna-images/image/upload/v1634234506/Senyet_getu_ak31f0.jpg',
    },
    {
      name: 'Mohammed Sied',
      role: 'Head of Finance and Administration',
      imgUrl:
        'https://res.cloudinary.com/yegna-images/image/upload/v1634234646/Mohammed_Sied_conz5d.jpg',
    },
  ];

  constructor(@Inject('BASE_IMAGE_URL') public baseImageUrl: string) {}

  ngOnInit(): void {}
}
