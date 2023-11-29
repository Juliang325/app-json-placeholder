import { Users } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceholderServiceService } from 'src/app/services/placeholder-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  id:any;
  user:Users;

  constructor(
    private servi : PlaceholderServiceService, 
    private activateRoute: ActivatedRoute,
    
  ) { 
    this.user = {} as Users
    this.id = ""
  }

  ngOnInit() {
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    this.servi.getOneUser(Number(this.id)).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

}
