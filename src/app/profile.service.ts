import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProfile } from './profile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getProfileInfo(id): Observable<IProfile> {
    return this.httpClient.get<IProfile>('http://localhost:3000/profile/' + id);
  }

}
