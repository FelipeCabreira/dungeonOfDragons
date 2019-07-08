import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
// tslint:disable-next-line: max-line-length
import { GeneralActionTypes, ChangeLoading, LoginTokenState, ClearSession, LoginState, LoginStateSuccess, LoginStateError, LogoutState, LogoutStateSuccess, LogoutStateError, DragonList, DragonListSuccess, DragonListError, DragonState, DragonStateSuccess, DragonStateError, DragonSave, DragonSaveSuccess, DragonSaveError, DragonDelete, DragonDeleteSuccess, DragonDeleteError } from './general.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GeneralState } from './general.reducer';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { DragonModel } from 'src/app/_models/dragon.model';
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
        private _api: ApiService,
        private _cookies: CookieService,
        private _router: Router,
        // private _toasterService: ToasterService
    ) {
        // this.dssession = this._cookies.get('dssession');
    }


    @Effect() // GET - LIST DRAGONS
    DragonListEffects$ = this._actions$
        .pipe(
            ofType(GeneralActionTypes.DragonList),
            mergeMap((action: DragonList) => {
                // this._store.dispatch(new ChangeLoading(true));
                return this._api.get('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon').pipe(
                    map((data: any) => {
                        // this._store.dispatch(new ChangeLoading(false));
                        const dragonData = data.body;
                        // this._store.dispatch(new ClearSession());
                        // this._service.logout();
                        // this._cookies.deleteAll();
                        this._router.navigate(['./dungeon/dragon-shouts']);
                        return new DragonListSuccess(dragonData);
                    })
                );
            }),
            catchError((err, caught) => {
                // this._store.dispatch(new ChangeLoading(false));
                // this._service.logout();
                // this._cookies.deleteAll();
                this._store.dispatch(new DragonListError(err));
                return caught;
            })
        );

    @Effect() // GET - DRAGONS ID
    DragonStateEffects$ = this._actions$
        .pipe(
            ofType(GeneralActionTypes.DragonState),
            mergeMap((action: DragonState) => {
                return this._api.get('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + action.id).pipe(
                    map((data: any) => {
                        const dragonData = data.body;
                        return new DragonStateSuccess(dragonData);
                    })
                );
            }),
            catchError((err, caught) => {
                this._store.dispatch(new DragonStateError(err));
                return caught;
            })
        );

    @Effect() // POST - SAVE DRAGONS
    DragonSaveEffects$ = this._actions$
        .pipe(
            ofType(GeneralActionTypes.DragonSave),
            mergeMap((action: DragonSave) => {
                const body: DragonModel = {
                    id: 50,
                    createdAt: "2018",
                    name: "Dovaah",
                    type: "Fire",
                    histories: []
                };
                return this._api.post('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', body).pipe(
                    map((data: any) => {
                        const dragonData = data.body;
                        return new DragonSaveSuccess(dragonData);
                    })
                );
            }),
            catchError((err, caught) => {
                this._store.dispatch(new DragonSaveError(err));
                return caught;
            })
        );

    // @Effect() // PUT - UPDATE DRAGONS
    // DragonUpdateEffects$ = this._actions$
    //     .pipe(
    //         ofType(GeneralActionTypes.Dragon),
    //         mergeMap((action: DragonDelete) => {
    //             const body: DragonModel = { };
    //             return this._api.put('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + action.id, body).pipe(
    //                 map((data: any) => {
    //                     const dragonData = data.body;
    //                     return new DragonStateSuccess(dragonData);
    //                 })
    //             );
    //         }),
    //         catchError((err, caught) => {
    //             this._store.dispatch(new DragonStateError(err));
    //             return caught;
    //         })
    //     );

    @Effect() // DELETE - SAVE DRAGONS
    DragonEffects$ = this._actions$
        .pipe(
            ofType(GeneralActionTypes.DragonDelete),
            mergeMap((action: DragonDelete) => {
                return this._api.delete('https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' + action.id).pipe(
                    map((data: any) => {
                        const dragonData = data.body;
                        return new DragonDeleteSuccess(dragonData);
                    })
                );
            }),
            catchError((err, caught) => {
                this._store.dispatch(new DragonDeleteError(err));
                return caught;
            })
        );


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
}

