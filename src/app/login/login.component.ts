import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private message = '';
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    if (this.apiService.LoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  loginUser(userData: NgForm) {
    if (userData.invalid) {
      return false;
    }

    this.apiService.userLogin(userData.value).subscribe(data => {
      const helper = new JwtHelperService();
      if (data.status) {
        localStorage.setItem('token', data.token);
        /* const decoded = helper.decodeToken(data.token);
        console.log(decoded);
        console.log(helper.isTokenExpired(data.token)); */
        this.router.navigate(['dashboard']);
      }
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.message = err.error.success;
        }
      }
   });
  }

}
