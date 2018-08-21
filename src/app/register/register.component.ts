import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  registerUser(userData: NgForm) {
    if (userData.invalid) {
      return false;
    }
    this.apiService.registerUser(userData.value);
    userData.resetForm();
  }

}
