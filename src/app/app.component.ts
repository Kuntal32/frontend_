import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './api.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flowers';

  constructor(private router: Router, private apiService: ApiService, private location: Location) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if (this.apiService.LoggedIn()) {
      if (location.pathname === '/' || location.pathname === '/flower/') {
       this.router.navigate(['dashboard']);
      }
    } else {
      if (location.pathname === '/' || location.pathname === '/flower/') {
       this.router.navigate(['login']);
      }
    }
  }
}
