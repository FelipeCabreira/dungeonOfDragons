import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
// tslint:disable-next-line: max-line-length
import { GeneralActionTypes, ChangeLoading, LoginTokenState, ClearSession, LoginState, LoginStateSuccess, LoginStateError, LogoutState, LogoutStateSuccess, LogoutStateError } from './general.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GeneralState } from './general.reducer';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
// import { ToasterService } from 'angular2-toaster';
// tslint:disable-next-line: nx-enforce-module-boundaries
// import { LoginModel } from 'libs/shared-libraries/utils/src/lib/models/login.model';
// tslint:disable-next-line: nx-enforce-module-boundaries
// import { TokenModel } from 'libs/shared-libraries/utils/src/lib/models/token.model';

@Injectable()
export class GeneralEffects {


	constructor(
		private _actions$: Actions,
		private _store: Store<GeneralState>,
		private _cookies: CookieService,
		private _router: Router,
		// private _toasterService: ToasterService
	) {
		// this.dssession = this._cookies.get('dssession');
	}

	
	// @Effect() // LOGIN
	// OpenSessionEffectsFormshow$ = this._actions$
	// 	.pipe(
	// 		ofType(GeneralActionTypes.LoginState),
	// 		mergeMap((action: LoginState) => {
    //             this._store.dispatch(new ChangeLoading(true));
	// 			return this._service.getRequest('').pipe(
	// 				map((data: any) => {
	// 					// const dadosFormShow = data.body['result'][0];
	// 					// this._store.dispatch(new ChangeLoading(false));

	// 					// // Transforma os dados em string e coloca no cookies
	// 					// const session = JSON.stringify(data);
	// 					// this._cookies.set('FormShow', session);

    //                     return new LoginStateSuccess();
    //                     // dadosFormShow
	// 				})
	// 			);
	// 		}),
	// 		catchError((err, caught) => {
	// 			this._store.dispatch(new LoginStateError(err));
	// 			this._store.dispatch(new ChangeLoading(false));
	// 			return caught;
	// 		})
	// 	);


	
	// @Effect() // LOGOUT
	// CloseSessionEffectsFormshow$ = this._actions$
	// 	.pipe(
	// 		ofType(GeneralActionTypes.LogoutState),
	// 		mergeMap((action: LogoutState) => {
	// 			return this._service.getRequest('datasnap/rest/CloseSession').pipe(
	// 				map((data: any) => {
	// 					// TODO: ACTION QUE ATIVE UM SELECTOR PARA PERMANECER NO LOGIN
	// 					this._store.dispatch(new ChangeLoading(false));
	// 					this._store.dispatch(new ClearSession());
	// 					this._service.logout();
	// 					this._cookies.deleteAll();
	// 					this._router.navigate(['./login']);
	// 					return new LogoutStateSuccess(data);
	// 				})
	// 			);
	// 		}),
	// 		catchError((err, caught) => {
	// 			this._store.dispatch(new ChangeLoading(false));
	// 			this._service.logout();
	// 			this._cookies.deleteAll();
	// 			this._store.dispatch(new LogoutStateError(err));
	// 			return caught;
	// 		})
    // 	);
    
    // @Effect() // GET LIST DRAGONS
	// CloseSessionEffectsFormshow$ = this._actions$
	// 	.pipe(
	// 		ofType(GeneralActionTypes.LogoutState),
	// 		mergeMap((action: LogoutState) => {
	// 			return this._service.getRequest('').pipe(
	// 				map((data: any) => {
	// 					// TODO: ACTION QUE ATIVE UM SELECTOR PARA PERMANECER NO LOGIN
	// 					this._store.dispatch(new ChangeLoading(false));
	// 					this._store.dispatch(new ClearSession());
	// 					// this._service.logout();
	// 					this._cookies.deleteAll();
	// 					this._router.navigate(['./login']);
	// 					return new LogoutStateSuccess(data);
	// 				})
	// 			);
	// 		}),
	// 		catchError((err, caught) => {
	// 			this._store.dispatch(new ChangeLoading(false));
	// 			// this._service.logout();
	// 			this._cookies.deleteAll();
	// 			this._store.dispatch(new LogoutStateError(err));
	// 			return caught;
	// 		})
	// 	);
}
