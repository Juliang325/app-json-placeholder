import { Photo } from './../../interfaces/photo';
import { Album } from './../../interfaces/album';
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
  albums:Album[];
  photos:Photo[];

  constructor(
    private servi : PlaceholderServiceService, 
    private activateRoute: ActivatedRoute,
    
  ) { 
    this.user = {} as Users;
    this.id = "";
    this.albums = [],
    this.photos = []
  }

  ngOnInit() {
    this .id = this.activateRoute.snapshot.paramMap.get("id");
    this.servi.getOneUser(Number(this.id)).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  getAlbums(){
    this.servi.getAlbums(this.id).subscribe(
      album => {
        this.albums = album;
        
      }
    )
  }

  getPhotos(){
    
  }

}
