import { PlaceholderServiceService } from 'src/app/services/placeholder-service.service';
import { Users } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  users: Users[];

  constructor(private servi:PlaceholderServiceService) { 
    this.users = []
  }

  ngOnInit() {
    this.getCatalogo()
    console.log(this.users);
    
  }

  getCatalogo(){
    this.servi.getUsers()
      .subscribe(users => this.users = users);
  }

  

}
