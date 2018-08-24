import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getProfileInfo(id) {
   return this.httpClient.get<any>('http://localhost:3000/profile/' + id);
  }
}
