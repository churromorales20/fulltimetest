import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.sass']
})
export class UsersMainComponent implements OnInit {
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
