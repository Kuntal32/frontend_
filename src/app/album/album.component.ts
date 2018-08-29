import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  public Albumdata = [];
  ngOnInit() {
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(localStorage.getItem('token'));
    this.albumService.GetAlbumByUser(decoded.id).subscribe(data => {
      this.Albumdata = data;
      console.log(this.Albumdata);
    },
    err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log(err.status);
        }
      }
    });
  }

}
