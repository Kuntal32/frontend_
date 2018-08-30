import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log(message);
  }

  createAlbum (albumData) {
    return this.http.post<any>('http://localhost:3000/CreateAlbum', albumData);
  }

  GetAlbumByUser (id, pageIndex, pageSize) {
    return this.http.get<any>('http://localhost:3000/GetAlbums/' + id + '/' + pageIndex + '/' + pageSize)
    .pipe(
      tap(_ => this.log(`fetched albums id=${id}`)),
      catchError(this.handleError<any>(`get albums id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error); // log to console instead
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
    };
  }
}
