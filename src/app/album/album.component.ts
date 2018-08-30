import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpErrorResponse } from '@angular/common/http';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  public Albumdata = [];

   // tslint:disable-next-line:member-ordering
   length = 12;
   // tslint:disable-next-line:member-ordering
   pageSize = 12;
   // tslint:disable-next-line:member-ordering
   pageSizeOptions: number[] = [12, 24, 48, 72];
   // MatPaginator Output
   // tslint:disable-next-line:member-ordering
   public pageEvent;

   public pageIndex;

  ngOnInit() {
    this.getAlbums(null);
  }

  getAlbums(pageEvent: PageEvent) {
    if (pageEvent) {
      this.pageIndex = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;
    } else {
      this.pageIndex = 0;
    }
    const helper = new JwtHelperService();
    const decoded = helper.decodeToken(localStorage.getItem('token'));
    this.albumService.GetAlbumByUser(decoded.id, this.pageIndex , this.pageSize).subscribe(data => {
      this.Albumdata = data.data;
      this.pageSize = data.pageSize;
      this.length = data.length;
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
