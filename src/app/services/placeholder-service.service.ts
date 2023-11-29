import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

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

}
