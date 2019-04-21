import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isAddUser = false;
  userCreationStatus = 'No User created';
  userName = '';
  users = [];
  constructor() {
    setTimeout((a) => {
      this.isAddUser = true;
    }, 2000);
  }
  onAddUser = () => {
    // this.userCreationStatus = `User created with ${this.userName} username`;
    this.users.push(this.userName);
  }
}
