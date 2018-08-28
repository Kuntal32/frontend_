import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo: string;
  constructor(public apiService: ApiService) { }
  ngOnInit() {
    this.logo = '/assets/images.jpg';
  }


}
