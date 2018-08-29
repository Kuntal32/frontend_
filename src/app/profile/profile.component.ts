import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileService } from '../profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IProfile } from '../profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  public userData: any = [];
  ngOnInit() {
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(localStorage.getItem('token'));
    this.profileService.getProfileInfo(decoded.id).subscribe(
      data => { this.userData = data; },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(err.status);
          }
        }
      });
  }

}
