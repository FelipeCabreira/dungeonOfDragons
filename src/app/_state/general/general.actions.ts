import { Action } from '@ngrx/store';
import { LoginModel } from 'src/app/_models/login.model';

export enum GeneralActionTypes {
    // General actions
    GeneralInitialState = '[General] General Initial State',
    // Control loading between pages
    ChangeLoading = '[General] Change Loading',
    // Dungeon fun
    LocateDungeon = '[General] Locate dungeon',
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
    // Dragon Actions
    DragonList = '[General] Dragon List',
    DragonListSuccess = '[General] Dragon List Success',
    DragonListError = '[General] Dragon List Error',
    
    DragonState = '[General] Dragon State',
    DragonStateSuccess = '[General] Dragon State Success',
    DragonStateError = '[General] Dragon State Error',

    DragonSave = '[General] Dragon Save',
    DragonSaveSuccess = '[General] Dragon Save Success',
    DragonSaveError = '[General] Dragon Save Error',

    DragonDelete = '[General] Dragon Delete',
    DragonDeleteSuccess = '[General] Dragon Delete Success',
    DragonDeleteError = '[General] Dragon Delete Error',

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
export class LocateDungeon implements Action {
    readonly type = GeneralActionTypes.LocateDungeon;

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
export class DragonList implements Action {
    readonly type = GeneralActionTypes.DragonList;

    constructor() {}
}
export class DragonListSuccess implements Action {
    readonly type = GeneralActionTypes.DragonListSuccess;

    constructor(public payload: any) {
    }
}
export class DragonListError implements Action {
    readonly type = GeneralActionTypes.DragonListError;

    constructor(public payload: any) {
    }
}
export class DragonState implements Action {
    readonly type = GeneralActionTypes.DragonState;

    constructor(public id: any) {}
}
export class DragonStateSuccess implements Action {
    readonly type = GeneralActionTypes.DragonStateSuccess;

    constructor(public payload: any) {
    }
}
export class DragonStateError implements Action {
    readonly type = GeneralActionTypes.DragonStateError;

    constructor(public payload: any) {
    }
}
export class DragonSave implements Action {
    readonly type = GeneralActionTypes.DragonSave;

    constructor(public body) {}
}
export class DragonSaveSuccess implements Action {
    readonly type = GeneralActionTypes.DragonSaveSuccess;

    constructor(public payload: any) {
    }
}
export class DragonSaveError implements Action {
    readonly type = GeneralActionTypes.DragonSaveError;

    constructor(public payload: any) {
    }
}
export class DragonDelete implements Action {
    readonly type = GeneralActionTypes.DragonDelete;

    constructor(public id:any) {}
}
export class DragonDeleteSuccess implements Action {
    readonly type = GeneralActionTypes.DragonDeleteSuccess;

    constructor(public payload: any) {
    }
}
export class DragonDeleteError implements Action {
    readonly type = GeneralActionTypes.DragonDeleteError;

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
    | LocateDungeon
    | LoginTokenState
    | LoginState
    | LoginStateSuccess
    | LoginStateError
    | DragonList
    | DragonListSuccess
    | DragonListError
    | DragonState
    | DragonStateSuccess
    | DragonStateError
    | DragonSave
    | DragonSaveSuccess
    | DragonSaveError
    | DragonDelete
    | DragonDeleteSuccess
    | DragonDeleteError
    | LogoutState
    | LogoutStateSuccess
    | LogoutStateError
    | ClearSession;

