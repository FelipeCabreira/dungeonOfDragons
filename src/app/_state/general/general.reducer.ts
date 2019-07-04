import { GeneralActions, GeneralActionTypes } from './general.actions';
import { TokenModel } from 'src/app/_models/token.model';
// import { LoginModel } from 'libs/shared-libraries/utils/src/lib/models/login.model';

// tudo o que tem dentro do state
export interface GeneralState {
    loading: number;
    token: TokenModel;
}

// valores iniciais para cada uma das actions
export const initialState: GeneralState = {
    loading: 0,
    token: null,
};

export function generalReducer(state: GeneralState = initialState, action: GeneralActions): GeneralState {

    switch (action.type) {

        case GeneralActionTypes.GeneralInitialState:
            return initialState;

        case GeneralActionTypes.ChangeLoading:
            const loadCount = action.payload ? state.loading + 1 : state.loading <= 0 ? 0 : state.loading - 1;

            return {
                ...state,
                loading: loadCount
            };

        case GeneralActionTypes.LoginTokenState:
            return {
                ...state,
                token: action.payload,
            };
        case GeneralActionTypes.LoginState:
            return {
                ...state,
            };
        case GeneralActionTypes.LoginStateSuccess:
            return {
                ...state,
                token: action.payload,
            };
        case GeneralActionTypes.LoginStateError:
            return {
                ...state,
                token: action.payload,
            };
        case GeneralActionTypes.LogoutState:
            return {
                ...state,
                token: null,
            };
        case GeneralActionTypes.LogoutStateSuccess:
            return {
                ...state,
                token: null,
            };
        case GeneralActionTypes.LogoutStateError:
            return {
                ...state,
                token: null,
            };

        default:
            return state;
    }
}

export function clearState(reducer) {
    return function (state, action) {
        if (action.type === GeneralActionTypes.ClearSession) {
            state = undefined;
        }
        return reducer(state, action);
    };
}