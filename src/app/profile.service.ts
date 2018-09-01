import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProfile } from './profile';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  private log(message: string) {
    console.log(message);
  }
  getProfileInfo(id) {
    return this.httpClient.get<any>('http://localhost:3000/profile/' + id)
          .pipe(
            tap(_ => this.log(`fetched profile id=${id}`)),
            catchError(this.handleError<any>(`get profile id=${id}`))
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
