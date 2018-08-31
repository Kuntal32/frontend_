import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {
         MatButtonModule,
         MatCardModule,
         MatToolbarModule,
         MatInputModule,
         MatMenuModule,
         MatTableModule,
         MatPaginatorModule,
         MatTooltipModule,
         MatDialogModule
        } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenIntercepterService } from './token-intercepter.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { AlbumComponent } from './album/album.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { ImagesComponent } from './album/images/images.component';
import { FileSelectDirective } from 'ng2-file-upload';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    AlbumComponent,
    CreateAlbumComponent,
    ImagesComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    NgbModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
