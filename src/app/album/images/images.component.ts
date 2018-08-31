import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { AlbumService } from '../../album.service';




const URL = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private router: Router, private albumService: AlbumService) { }
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    console.log(this.uploader);
    this.albumService.uploadImage(this.uploader);
  }
}
