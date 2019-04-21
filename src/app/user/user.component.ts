import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  userId: number = Math.random();
  username = 'username';
  userStatus = '';
  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'Active' : 'In-active';
  }
  getColor = () => {
    return this.userStatus === 'Active' ? 'green' : 'red';
  }
  geUserStatus = () => {
    return this.userStatus;
  }
}
