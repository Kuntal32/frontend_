import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { AlbumService } from '../../album.service';
import { Location } from '@angular/common';
import {PageEvent} from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';




const URL = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  private albumId;
  // tslint:disable-next-line:member-ordering
  length = 12;
  // tslint:disable-next-line:member-ordering
  pageSize = 12;
  // tslint:disable-next-line:member-ordering
  pageSizeOptions: number[] = [12, 24, 48, 72];
  // MatPaginator Output
  // tslint:disable-next-line:member-ordering
  public ImageData = [];

  public pageIndex;
  constructor(private router: Router, private albumService: AlbumService, private location: Location) {
    this.albumId = this.location.path().split('/')[2];
  }
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'photo'
  });
  ngOnInit() {
    this.albumService.uploadImage(this.uploader, this.albumId);
    this.getAlbumImage(this.albumId, null);
  }

  getAlbumImage(albumbid, pageEvent: PageEvent) {
    if (pageEvent) {
      this.pageIndex = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;
    } else {
      this.pageIndex = 0;
    }
    this.albumService.getImageByAlbum(albumbid, this.pageIndex, this.pageSize).subscribe(data => {
      this.ImageData = data.data;
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
