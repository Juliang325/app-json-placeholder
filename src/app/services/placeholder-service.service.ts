import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(environment.baseUrl + environment.users)
  }

  getOneUser(id: number): Observable<Users>{
    return this.http.get<Users>(environment.baseUrl + environment.users + id)
  }

  getAlbums(id: number): Observable<Album[]>{
    return this.http.get<Album[]>(environment.baseUrl + environment.users + id + environment.albums)
  }

  getPhotos(idUser: number, idAlbum: number): Observable<Photo[]>{
    return this.http.get<Photo[]>(environment.baseUrl + environment.users + idUser + environment.albums + idAlbum + environment.photos)
  }



}
