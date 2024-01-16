import { Action } from "redux";
import { LOGIN_SUCCESS, LoginSuccessAction } from "./actions";

const initialState: State  = {
    user: null
}

export interface State {
    user: {
        email: string,
        name: string
    } | null
}

export const reducer = (state=initialState, action:any) => {
    console.log(':: action in reducer', action);
    switch(action.type) {
        case LOGIN_SUCCESS: return {
            ...state,
            user: { ... action.payload},
          };
    }
    return state;
}