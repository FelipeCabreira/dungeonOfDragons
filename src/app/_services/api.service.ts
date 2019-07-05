import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonModel } from '../_models/dragon.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {
  }


  get(url: string, id?: any): Observable<any> {
    const response = this._http.get(url, { headers: this.getHeaders(), observe: 'response' })
      .pipe(
        catchError(
          error => {
            this.exceptionHandler(error, url);
            return new Observable<any>();
          }
        )
      );
    return response;
  }

  post(url: string, body: DragonModel, id?: any): Observable<any> {
    const response = this._http.post(url, body, { headers: this.getHeaders(), observe: 'response' })
      .pipe(
        catchError(
          error => {
            this.exceptionHandler(error, url);
            return new Observable<any>();
          }
        )
      );
    return response;
  }

  put(url: string, body: DragonModel, id?: any): Observable<any> {
    const response = this._http.put(url, body, { headers: this.getHeaders(), observe: 'response' })
      .pipe(
        catchError(
          error => {
            this.exceptionHandler(error, url);
            return new Observable<any>();
          }
        )
      );
    return response;
  }

  delete(url: string): Observable<any> {
    const response = this._http.delete(url, { headers: this.getHeaders(), observe: 'response' })
      .pipe(
        catchError(
          error => {
            this.exceptionHandler(error, url);
            return new Observable<any>();
          }
        )
      );
    return response;
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Access-Control-Allow-Origin', '*');
  }

  exceptionHandler<T>(errorOperation = 'operation', url: string) {
    return (err: any) => {
      let message = `error in ${errorOperation}() retrieving ${url}`;
      console.log(`${message}:`, err)
      if (err instanceof HttpErrorResponse) {
        // console.log(`status: ${err.status}, ${err.statusText}`);
        switch (err.status) {
          case 500:
            console.debug('teste error 500');
            console.debug(err.message);
            break;
          case 400:
            console.debug('teste error 400');
            console.debug(err.message);
            break;
          case 404:
            console.debug('teste error 404');
            console.debug(err.message);
            break;
          default:
            console.log(err);
            console.debug(err.message);
            break;
        }
      }
      return Observable.throw(message);
    }
  }

}
