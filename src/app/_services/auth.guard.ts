import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _cookies: CookieService,
    // private _store: Store<GeneralState>
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    let observable = new Observable<boolean>();

    // if (route.queryParams.token !== undefined && route.queryParams.token !== null) {

    //   this._cookies.set('dssession', route.queryParams.token);
    //   this._cookies.set('dssessionexpires', '1200000');
    //   this._cookies.set('principalRedirect', 'true');

    //   const tokenRoute = new TokenModel();
    //   tokenRoute.dssession = this._cookies.get('dssession');
    //   tokenRoute.dssessionexpires = this._cookies.get('dssessionexpires');

    //   this._store.dispatch(new LoginTokenState(tokenRoute));
    //   this._store.dispatch(new OpenSession());

    //   observable = new Observable<boolean>(
    //     obs => {
    //       this._store.select(selectOpenSession).subscribe(
    //         session => {
    //           if (session !== undefined && session !== null)
    //             obs.next(true);
    //         }
    //       )
    //     }
    //   )
    // } else {
    //   observable = new Observable<boolean>(
    //     obs => {
    //       this._store.select(selectLoginToken).subscribe(
    //         token => {
    //           if (token !== undefined && token !== null) {
    //             obs.next(true);
    //             obs.complete();
    //           } else {
    //             obs.next(false);
    //             this._router.navigate(['/login']);
    //           }
    //         });
    //     });
    // }


    
    return observable;
  }

}
