import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private navControl:NavController) { }

  ngOnInit() {
    //Despues de un segundo y medio irá al home
    setTimeout( () => {
        this.navControl.navigateRoot('home')
      }, 1500);

  }

}
