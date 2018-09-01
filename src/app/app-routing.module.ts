import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AlbumComponent } from './album/album.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { ImagesComponent } from './album/images/images.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'album', component: AlbumComponent, canActivate: [AuthGuard]},
  {path: 'createalbum', component: CreateAlbumComponent, canActivate: [AuthGuard]},
  {path: 'images/:id', component: ImagesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
