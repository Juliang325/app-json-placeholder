import { PlaceholderServiceService } from 'src/app/services/placeholder-service.service';
import { Users } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  users: Users[];

  constructor(
    private servi:PlaceholderServiceService,
    private loadingCtrl: LoadingController
    ) { 
    this.users = []
  }

  ngOnInit() {
    this.getCatalogo()
    
  }

  getCatalogo(){
    this.showLoading();
    this.servi.getUsers()
      .subscribe(users => {
        this.users = users;
        this.loadingCtrl.dismiss();
      });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'espere...',
    });

    loading.present();
  }

  

}
