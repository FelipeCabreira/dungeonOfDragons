import { Action } from '@ngrx/store';
import { LoginModel } from 'src/app/_models/login.model';

export enum GeneralActionTypes {
    // General actions
    GeneralInitialState = '[General] General Initial State',
    // Control loading between pages
    ChangeLoading = '[General] Change Loading',
    // Check token activities
    LoginTokenState = '[General] Login Token State',
    //  Actual login 
    LoginState = '[General] Login State',
    LoginStateSuccess = '[General] Login State Success',
    LoginStateError = '[General] Login State Error',
    // Logout
    LogoutState = '[General] Logout State',
    LogoutStateSuccess = '[General] Logout State Success',
    LogoutStateError = '[General] Logout State Error',
    // Restart redux
    ClearSession = '[General] Clear session',
}

export class GeneralInitialState implements Action {
    readonly type = GeneralActionTypes.GeneralInitialState;
}

export class ChangeLoading implements Action {
    readonly type = GeneralActionTypes.ChangeLoading;

    constructor(public payload: boolean) {
    }
}
export class LoginTokenState implements Action {
    readonly type = GeneralActionTypes.LoginTokenState;

    constructor(public payload: any) {
    }
}
export class LoginState implements Action {
    readonly type = GeneralActionTypes.LoginState;

    constructor(public userBody: LoginModel) {
    }
}
export class LoginStateSuccess implements Action {
    readonly type = GeneralActionTypes.LoginStateSuccess;

    constructor(public payload: any) {
    }
}
export class LoginStateError implements Action {
    readonly type = GeneralActionTypes.LoginStateError;

    constructor(public payload: any) {
    }
}
export class LogoutState implements Action {
    readonly type = GeneralActionTypes.LogoutState;

    constructor(public payload: any) {
    }
}
export class LogoutStateSuccess implements Action {
    readonly type = GeneralActionTypes.LogoutStateSuccess;

    constructor(public payload: any) {
    }
}
export class LogoutStateError implements Action {
    readonly type = GeneralActionTypes.LogoutStateError;

    constructor(public payload: any) {
    }
}
export class ClearSession implements Action {
    readonly type = GeneralActionTypes.ClearSession;
}


export type GeneralActions =
    GeneralInitialState
    | ChangeLoading
    | LoginTokenState
    | LoginState
    | LoginStateSuccess
    | LoginStateError
    | LogoutState
    | LogoutStateSuccess
    | LogoutStateError
    | ClearSession;

