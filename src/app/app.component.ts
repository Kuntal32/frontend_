import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flowers';

  constructor(private router: Router, private apiService: ApiService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if (this.apiService.LoggedIn()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
