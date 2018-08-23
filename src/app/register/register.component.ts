import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }

  private message = '';
  ngOnInit() {
    if (this.apiService.LoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }
  registerUser(userData: NgForm) {
    if (userData.invalid) {
      return false;
    }
    this.apiService.registerUser(userData.value).subscribe(data => {
      localStorage.setItem('token', data.token);
      this.router.navigate(['dashboard']);
      userData.resetForm();
      this.message = data.success;
     }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.message = err.error.success;
          }
        }
     });
  }

}
