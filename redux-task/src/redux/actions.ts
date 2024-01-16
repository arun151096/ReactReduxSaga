
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export interface LoginAction {
    type: string,
    payload: {
        email: string
        password: string
    }
}

export interface  LoginSuccessAction {
    type: string;
    payload: {
        user: {
            name: string,
            email: string
        }
    }
}

export const login = (email: string, password: string) => ({ type: LOGIN, payload: { email, password }});

export const loginSuccess = (user: { name: string, email: string }) => ({ type: LOGIN_SUCCESS, payload: { ...user }});

export const loginFailure = () =>  ({ type: LOGIN_FAILURE });