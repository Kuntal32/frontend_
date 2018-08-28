import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



// tslint:disable-next-line:class-name
interface myData {
  status: boolean;
  success: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
   return this.http.post<any>('http://localhost:3000/register', user);
  }

  userLogin(userData) {
    return this.http.post<myData>('http://localhost:3000/login', userData);
  }

  LoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserName() {
    const token = this.getToken();
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token).username;

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);

  }
}
