import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo: string;
  constructor(public apiService: ApiService, private location: Location) { }
  ngOnInit() {
    if (location.pathname.split('/')[1] === 'flower') {
      this.logo = '/flower/assets/images.jpg';
    } else {
      this.logo = '/assets/images.jpg';
    }
  }


}
