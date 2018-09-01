import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {  FileUploader, FileSelectDirective, FileUploaderOptions } from 'ng2-file-upload/ng2-file-upload';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  private log(message: string) {
    console.log(message);
  }

  createAlbum (albumData) {
    return this.http.post<any>('http://localhost:3000/CreateAlbum', albumData);
  }

  GetAlbumByUser (id, pageIndex, pageSize) {
    return this.http.get<any>('http://localhost:3000/GetAlbums/' + id + '/' + pageIndex + '/' + pageSize)
    .pipe(
      tap(_ => this.log(`fetched albums of user=${id}`)),
      catchError(this.handleError<any>(`get albums of user=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    };
  }

  uploadImage (uploader) {
        const authHeader: Array<{
        name: string;
        value: string;
        }> = [];
        authHeader.push({name: 'Authorization', value: 'Bearer ' + this.apiService.getToken()});
        const uploadOptions = <FileUploaderOptions>{headers : authHeader};
        uploader.setOptions(uploadOptions);
        uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
     };
  }
}
