import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  public userData;
  ngOnInit() {
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(localStorage.getItem('token'));
    this.profileService.getProfileInfo(decoded.id).subscribe(data => {
      this.userData = data;
    });
  }

}
