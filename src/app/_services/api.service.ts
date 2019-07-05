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

  getHeaders(): HttpHeaders {
    // const monitor = this._cookies.get('monitor');
    let session: string;

    // Define session values if not get session from cookies !
    // if (dssession !== undefined && dssession !== null && dssession !== '')
    // 	session = dssession;
    // else session = this._cookies.get('dssession');

    return new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Access-Control-Allow-Origin', '*')
    // .set('Pragma', 'dssession=' + session);
  }

  exceptionHandler<T>(errorOperation = 'operation', url: string) {
    return (err: any) => {
      let message = `error in ${errorOperation}() retrieving ${url}`;
      console.log(`${message}:`, err)
      if (err instanceof HttpErrorResponse) {
        // you could extract more info about the error if you want, e.g.:
        console.log(`status: ${err.status}, ${err.statusText}`);
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
