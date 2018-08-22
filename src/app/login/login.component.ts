import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  loginUser(userData: NgForm) {
    if (userData.invalid) {
      return false;
    }

    this.apiService.userLogin(userData.value).subscribe(res => {
      console.log(res);
    });
  }

}
