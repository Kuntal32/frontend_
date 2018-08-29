import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AlbumService} from '../../album.service';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  public message = '';
  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit() {
  }

  createAlbum(albumData: NgForm) {
      if (albumData.invalid) {
        return false;
      }
      const token = localStorage.getItem('token');
      const helper = new JwtHelperService();
      const decoded = helper.decodeToken(token);
      albumData.value.id = decoded.id;
      this.albumService.createAlbum(albumData.value).subscribe(data => {
        if (data.status) {
          this.router.navigate(['album']);
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.message = err.error.success;
          }
        }
      });
  }

}
