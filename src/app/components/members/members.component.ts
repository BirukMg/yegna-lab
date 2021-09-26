import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/members.model'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    {
      name: 'John Doe',
      role: 'CEO',
      imgUrl: 'men-member-1.jpg',
    },
    {
      name: 'Emma',
      role: 'Marketing & sale',
      imgUrl: 'women-member-1.jpg',
    },
    {
      name: 'Aaliyah',
      role: 'Finance Head',
      imgUrl: 'women-member-2.jpg',
    },
    {
      name: 'Smith',
      role: 'Associate Manager',
      imgUrl: 'men-member-2.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
